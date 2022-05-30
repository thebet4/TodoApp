export interface IHomeSettings {
  value: {
      principal: {
          title: string,
          description:string,
          calltoaction: string,
          text2: string,
          text3: string,
          image: IImageProps,
      },
      hotelDestaque: {
          image: IImageProps,
          textTaxa: string,
          textTaxa2: string,
          textNFT: string,
          textBuild: string,
          textBlock: string,
      },
      whitepaper: {
          whitepaperFile: string,
          text: string,
      },
      roadmap: {
        listRoadmap: IHomeSettingRoadMapItem[]
      }
  },
}

interface IHomeSettingRoadMapItem {
    trimestre: number,
    ano: string,
    meta: string
}

interface IImageProps {
  url: string,
  name: string,
  size: number
}
