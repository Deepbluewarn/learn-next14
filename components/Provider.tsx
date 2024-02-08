'use client'

import { useCallback, useEffect, useState } from "react";
import { API_URL } from "../app/constants";
import styles from '../styles/provider.module.css';

export async function getProviderInfo(id: string) {
    const res = await fetch(`${API_URL}/${id}/providers`);
    return await res.json();
}

const ProviderTypeObject = {
    flatrate: 'Stream',
    rent: 'Rent',
    buy: 'Buy',
}

export default function Provider({ id }: { id: string }) {
    const [providers, setProviders] = useState({});
    const [countryCode, setCountryCode] = useState('');
    const [type, setType] = useState('');

    const onCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountryCode(e.target.value);
    }

    const onTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    }

    const ProviderTypeList = useCallback(() => {
        let providerListByCountryCode = providers[countryCode] || {};
        const keys = Object.keys(providerListByCountryCode);

        const index = keys.indexOf('link');
        if (index !== -1) {
            keys.splice(index, 1);
        }

        return keys;
    }, [providers, countryCode]);

    const ProviderList = useCallback(() => {
        const providerListByType = (providers[countryCode] || {})[type] || [];

        if(providerListByType.length > 0) {
            return providerListByType.map((provider) => {
                return (
                    <div key={provider.provider_id} className={styles.item}>
                        <img src={provider.logo_path} alt={provider.provider_name} />
                        <span>{provider.provider_name}</span>
                    </div>
                )
            });
        }

        return null;
    }, [providers, countryCode, type]);

    const getCountryName = (countryCode: string) => {
        let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
        return regionNames.of(countryCode);  // "United States"
    }

    useEffect(() => {
        getProviderInfo(id).then((res) => {
            setProviders(res);
            setCountryCode(Object.keys(res)[0]);
        });
    }, []);

    useEffect(() => {
        setType(ProviderTypeList()[0]);
    }, [providers, countryCode]);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Providers</span>
            <div className={styles.select}>
                    <select name="country" id="country-select" onChange={onCountryChange}>
                        {
                            Object.keys(providers).map((countryCode) => {
                                return <option key={countryCode} value={countryCode}>{getCountryName(countryCode)}</option>
                            })
                        }
                    </select>
                    <select name="type" id="type-select" onChange={onTypeChange}>
                        {
                            ProviderTypeList()?.map((ListType) => {
                                return <option key={ListType} value={ListType}>{ProviderTypeObject[ListType]}</option>
                            })
                        }
                    </select>
                </div>
                <div className={styles.list}>
                    {ProviderList()}
                </div>
        </div>
    )
}
