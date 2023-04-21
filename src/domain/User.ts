import { ImagePickerAsset } from "expo-image-picker"

export type User = {
  id?: string
  userName: string
  phoneNumber: string
  profilePic?: string | ImagePickerAsset
  verifyCode?: string
}
