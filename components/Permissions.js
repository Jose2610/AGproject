import { PermissionsAndroid } from "react-native";

export async function requestCameraPermissions() {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    } catch (e) {
        console.warn(err);
    }
}

export async function requestStoragePermissions() {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        ])
    } catch (e) {
        console.warn(err);
    }
}