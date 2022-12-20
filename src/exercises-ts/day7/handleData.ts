import { getData } from '../../utils/getData';

 export async function handleData() {
 const rawData = await getData('7')
 return rawData
}