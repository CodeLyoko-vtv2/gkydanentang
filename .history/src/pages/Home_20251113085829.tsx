import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { bookOutline, chevronForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { subjects } from '../data/subjects';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  const handleSubjectClick = (subject: string) => {
    history.push(`/notes/${encodeURIComponent(subject)}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Study Notes - Ghi chú học tập</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Study Notes</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="home-container">
          <div className="welcome-section">
            <IonIcon icon={bookOutline} className="welcome-icon" />
            <h2>Chọn môn học</h2>
            <p>Nhấn vào môn học để xem và thêm ghi chú</p>
          </div>

          <IonList>
            {subjects.map((subject, index) => (
              <IonItem 
                key={index} 
                button 
                onClick={() => handleSubjectClick(subject)}
                detail={false}
              >
                <IonIcon icon={bookOutline} slot="start" color="primary" />
                <IonLabel>
                  <h2>{subject}</h2>
                  <p>Nhấn để xem ghi chú</p>
                </IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
