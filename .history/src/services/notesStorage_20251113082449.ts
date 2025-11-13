import { Preferences } from '@capacitor/preferences';

/**
 * Service quản lý lưu trữ ghi chú sử dụng Capacitor Preferences
 */
export class NotesStorage {
  /**
   * Lấy danh sách ghi chú của một môn học
   * @param subject - Tên môn học
   * @returns Mảng các ghi chú
   */
  static async getNotes(subject: string): Promise<string[]> {
    try {
      const result = await Preferences.get({ key: `notes_${subject}` });
      const notes = result.value ? JSON.parse(result.value) : [];
      return notes;
    } catch (error) {
      console.error('Error getting notes:', error);
      return [];
    }
  }

  /**
   * Lưu danh sách ghi chú của một môn học
   * @param subject - Tên môn học
   * @param notes - Mảng các ghi chú cần lưu
   */
  static async saveNotes(subject: string, notes: string[]): Promise<void> {
    try {
      await Preferences.set({
        key: `notes_${subject}`,
        value: JSON.stringify(notes)
      });
    } catch (error) {
      console.error('Error saving notes:', error);
      throw error;
    }
  }

  /**
   * Xóa toàn bộ ghi chú của một môn học
   * @param subject - Tên môn học
   */
  static async clearNotes(subject: string): Promise<void> {
    try {
      await Preferences.remove({ key: `notes_${subject}` });
    } catch (error) {
      console.error('Error clearing notes:', error);
      throw error;
    }
  }
}
