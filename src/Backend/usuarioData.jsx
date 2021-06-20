import Usuario from './models/Usuario';
import {db} from '../firebase'
export const getCustomers = async () => {
    try {
        const response = await db.collection('usuarios');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const usuario= new Usuario(
                doc.id,
                doc.data().name,
                doc.data().email,
                doc.data().cellphone,
                doc.data().ci,
                doc.data().direction,
                doc.data().photoURL,
            );

            array.push(usuario);
        });
        return array;
    } catch (error) {
        console.err(error);
        throw error;
    }
}
