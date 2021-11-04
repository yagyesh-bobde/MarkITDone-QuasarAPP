import { Dialog , Loading} from 'quasar'

export function showError(errorMessage) {
    Loading.hide()
    Dialog.create({
        title: 'Error',
        message: errorMessage
    })
}