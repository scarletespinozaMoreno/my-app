import {db} from '../firebase'
import Actividad from '../Models/Actividad';

export const getActividades = async () => {
    try {
        const response = await db.collection('Actividades');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const actividad = new Actividad(
                doc.id,
                doc.data().Imagen,
                doc.data().Descripcion,
                doc.data().fechaInicio,
                doc.data().Duracion,
                doc.data().Hora,
                doc.data().Capacidad,
                doc.data().Titulo
            );
            array.push(actividad);
        });
        return array;
    } catch (error) {
        throw error;
    }
}