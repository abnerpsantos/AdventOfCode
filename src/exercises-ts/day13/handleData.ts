import { getData } from '../../utils/getData';

 export async function handleData() {
 const rawData = await getData('13')
 return rawData
}