import css from './Loader.module.css'
import { TailSpin } from  'react-loader-spinner'

export const Loader = () => {
    return (
        <div className={css.loader}>
            <TailSpin
                type="TailSpin"
                height={80}
                width={80}
                color="#4fa94d"
                radius={1}
            />
        </div>
    );
}
