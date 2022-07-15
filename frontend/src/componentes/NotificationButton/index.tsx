import icon from '../../assets/img/notification-icon.svg';
import './styles.css';
    //mesma pasta é . / pasta anterior é ..
    function NotificationButton() {
        // aqui eu criei a função notificationButton e onde eu chamar ela vai aparecer o que eu coloquei aqui
        return (
            <div className="dsmeta-red-btn">
                <img src={icon} alt="Notificar" />
            </div>
        )
    }
export default NotificationButton; // copiado do app.tsx