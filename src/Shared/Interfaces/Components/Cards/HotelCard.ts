export default interface IHotelCardProps {
  category?: number;
  name: string;
  description: string;
  valueInInn: string;
  valueInBrl: string;
  icon: any;
  location?: {
    lat: number;
    lng: number;
  },
  imageUrl: any;
}
