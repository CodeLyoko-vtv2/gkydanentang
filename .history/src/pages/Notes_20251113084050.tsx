import { useState, useEffect } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonText,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonModal,
  IonTextarea,
  IonFab,
  IonFabButton,
  useIonToast,
  useIonAlert
} from '@ionic/react';
import { 
  addOutline, 
  trashOutline, 
  documentTextOutline, 
  createOutline, 
  closeOutline,
  checkmarkOutline,
  timeOutline
} from 'ionicons/icons';
import { useParams } from 'react-router-dom';
import { NotesStorage } from '../services/notesStorage';
import './Notes.css';

interface RouteParams {
  subject: string;
}

interface Note {
  id: string;
  content: string;
  createdAt: number;
  updatedAt: number;
}

const Notes: React.FC = () => {
  const { subject } = useParams<RouteParams>();
  const decodedSubject = decodeURIComponent(subject);
  
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<string>('');
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>('');
  const [present] = useIonToast();
  const [presentAlert] = useIonAlert();

  useEffect(() => {
    loadNotes();
  }, [decodedSubject]);

  const loadNotes = async () => {
    try {
      const loadedNotes = await NotesStorage.getNotes(decodedSubject);
      setNotes(loadedNotes);
    } catch (error) {
      console.error('Error loading notes:', error);
      present({
        message: 'Không thể tải ghi chú!',
        duration: 2000,
        color: 'danger'
      });
    }
  };

  const handleAddNote = async () => {
    if (!newNote.trim()) {
      present({
        message: 'Vui lòng nhập nội dung ghi chú!',
        duration: 2000,
        color: 'warning'
      });
      return;
    }

    try {
      const updatedNotes = [...notes, newNote.trim()];
      await NotesStorage.saveNotes(decodedSubject, updatedNotes);
      setNotes(updatedNotes);
      setNewNote('');
      present({
        message: 'Đã thêm ghi chú thành công!',
        duration: 1500,
        color: 'success'
      });
    } catch (error) {
      console.error('Error adding note:', error);
      present({
        message: 'Không thể thêm ghi chú!',
        duration: 2000,
        color: 'danger'
      });
    }
  };

  const handleDeleteNote = async (index: number) => {
    try {
      const updatedNotes = notes.filter((_, i) => i !== index);
      await NotesStorage.saveNotes(decodedSubject, updatedNotes);
      setNotes(updatedNotes);
      present({
        message: 'Đã xóa ghi chú!',
        duration: 1500,
        color: 'success'
      });
    } catch (error) {
      console.error('Error deleting note:', error);
      present({
        message: 'Không thể xóa ghi chú!',
        duration: 2000,
        color: 'danger'
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Ghi chú - {decodedSubject}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{decodedSubject}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="notes-container">
          {/* Form thêm ghi chú mới */}
          <IonCard className="add-note-card">
            <IonCardContent>
              <h3>
                <IonIcon icon={addOutline} /> Thêm ghi chú mới
              </h3>
              <IonItem className="input-item" lines="none">
                <IonInput
                  value={newNote}
                  placeholder="Nhập nội dung ghi chú..."
                  onIonInput={(e) => setNewNote(e.detail.value!)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddNote();
                    }
                  }}
                />
              </IonItem>
              <IonButton 
                expand="block" 
                onClick={handleAddNote}
                className="add-button"
              >
                <IonIcon icon={addOutline} slot="start" />
                Thêm ghi chú
              </IonButton>
            </IonCardContent>
          </IonCard>

          {/* Danh sách ghi chú */}
          <div className="notes-list-section">
            <h3 className="section-title">
              <IonIcon icon={documentTextOutline} /> 
              Danh sách ghi chú ({notes.length})
            </h3>
            
            {notes.length === 0 ? (
              <IonCard className="empty-state">
                <IonCardContent>
                  <IonIcon icon={documentTextOutline} className="empty-icon" />
                  <IonText color="medium">
                    <p>Chưa có ghi chú nào.</p>
                    <p>Hãy thêm ghi chú đầu tiên!</p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            ) : (
              <IonList>
                {notes.map((note, index) => (
                  <IonItemSliding key={index}>
                    <IonItem className="note-item">
                      <IonLabel className="note-content">
                        
                        <p>{note}</p>
                      </IonLabel>
                    </IonItem>
                    <IonItemOptions side="end">
                      <IonItemOption 
                        color="danger" 
                        onClick={() => handleDeleteNote(index)}
                      >
                        <IonIcon icon={trashOutline} slot="icon-only" />
                      </IonItemOption>
                    </IonItemOptions>
                  </IonItemSliding>
                ))}
              </IonList>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Notes;
