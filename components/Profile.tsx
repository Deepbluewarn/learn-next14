import styles from "../styles/profile.module.css";

interface IProfileProps {
    credit: {
        profile_path: string;
        name: string;
        character: string;
    }
}
export default function Profile({ credit }: IProfileProps) {
    return (
        <div className={styles.profile}>
            {
                credit.profile_path ?
                    <img src={credit.profile_path} alt={credit.name} />
                    :
                    <div className={styles.profile_fallback}>❔</div>
            }
            <div className={styles.profile_info}>
                <span>{credit.name}</span>
                <span className={styles.profile_info_character}>{credit.character}</span>
            </div>
        </div>
    )
}