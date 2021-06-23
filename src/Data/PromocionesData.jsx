import {db} from '../firebase'
import Promociones from '../Models/Promocion.jsx';

export const getPromociones = async () => {
    try {
        const response = await db.collection('Promociones');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const promocion = new Promociones(
                doc.id,
                doc.data().Imagen,
                doc.data().Descripcion,
                doc.data().f_inicial,
                doc.data().Duracion,
                doc.data().f_final,
                doc.data().Cantidad,
                doc.data().Titulo
            );

            array.push(promocion);
        });
        return array;
    } catch (error) {
        throw error;
    }
}