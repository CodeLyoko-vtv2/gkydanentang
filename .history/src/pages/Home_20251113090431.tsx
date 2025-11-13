import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonText
} from '@ionic/react';
import { 
  bookOutline, 
  chevronForwardOutline, 
  schoolOutline,
  createOutline,
  documentTextOutline
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { subjects } from '../data/subjects';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  const handleSubjectClick = (subject: string) => {
    history.push(`/notes/${encodeURIComponent(subject)}`);
  };

  // Icon mapping cho từng môn học
  const subjectIcons: { [key: string]: string } = {
    'Toán': '📐',
    'Lý': '⚛️',
    'Hóa': '⚗️',
    'Anh': '🇬🇧',
    'CNTT': '💻'
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Study Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="home-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Study Notes</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="home-container">
          {/* Hero Header */}
          <div className="home-header">
            <div className="hero-content">
              <IonIcon icon={schoolOutline} className="hero-icon" />
              <h1>Ghi chú học tập</h1>
              <p>Tổ chức ghi chú theo từng môn học một cách hiệu quả</p>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="stats-summary">
            <div className="stat-item">
              <IonIcon icon={bookOutline} />
              <div className="stat-info">
                <h3>{subjects.length}</h3>
                <p>Môn học</p>
              </div>
            </div>
            <div className="stat-item">
              <IonIcon icon={documentTextOutline} />
              <div className="stat-info">
                <h3>∞</h3>
                <p>Ghi chú</p>
              </div>
            </div>
          </div>

          {/* Subjects Section */}
          <div className="subjects-section">
            <div className="section-header">
              <h2>
                <IonIcon icon={bookOutline} />
                Chọn môn học
              </h2>
              <IonText color="medium">
                <p>Nhấn vào môn học để xem và quản lý ghi chú</p>
              </IonText>
            </div>

            <div className="subjects-grid">
              {subjects.map((subject, index) => (
                <IonCard 
                  key={index} 
                  button
                  onClick={() => handleSubjectClick(subject)}
                  className="subject-card"
                >
                  <IonCardContent>
                    <div className="subject-card-header">
                      <div className="subject-emoji">{subjectIcons[subject]}</div>
                      <IonIcon icon={chevronForwardOutline} className="arrow-icon" />
                    </div>
                    <div className="subject-card-content">
                      <h3>{subject}</h3>
                      <p>Nhấn để xem ghi chú</p>
                    </div>
                  </IonCardContent>
                </IonCard>
              ))}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
