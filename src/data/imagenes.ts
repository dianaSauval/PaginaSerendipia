export type PhotoLayout =
  | "hero"
  | "wide"
  | "vertical"
  | "portrait"
  | "medium"
  | "square";

export type PhotoItem = {
  id: number;
  url: string;
  layout?: PhotoLayout;
  position?: string;
};

export const images: PhotoItem[] = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695421629/ACRODUO_31-10-22_31_mhoqo8.jpg",
    layout: "medium",
    position: "center",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695418995/dianayjosebaja_11_de_33_kaik2g.jpg",
    layout: "wide",
    position: "center",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695420809/Joseydianabaja_20_de_35_v1ljnh.jpg",
    layout: "hero",
    position: "center",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695563522/006_8389-dng_DxO_DeepPRIME_fic9vs.jpg",
    layout: "medium",
    position: "center",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695435129/003_1404-NEF_DxO_DeepPRIME_hjh8mk.jpg",
    layout: "square",
    position: "center",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695563570/003_1540-NEF_DxO_DeepPRIME_ysownn.jpg",
    layout: "hero",
    position: "center",
  },
  {
    id: 7,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695563569/003_1433-NEF_DxO_DeepPRIME_zfnyd0.jpg",
    layout: "square",
    position: "center",
  },
  {
    id: 8,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695563413/received_347491989384500_zyhb0n.jpg",
    layout: "hero",
    position: "center",
  },
  {
    id: 9,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695563523/006_8422-dng_DxO_DeepPRIME_hicrlw.jpg",
    layout: "wide",
    position: "center",
  },
  {
    id: 10,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695563569/003_1474-NEF_DxO_DeepPRIME_lddhbb.jpg",
    layout: "wide",
    position: "center",
  },
  {
    id: 11,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695564299/003_1580-NEF_DxO_DeepPRIME_wk7vhh.jpg",
    layout: "wide",
    position: "center",
  },
  {
    id: 12,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695563571/003_1476-NEF_DxO_DeepPRIME_uq1ukm.jpg",
    layout: "wide",
    position: "center",
  },
  {
    id: 13,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695563480/received_432722487264929_lxksio.jpg",
    layout: "vertical",
    position: "center",
  },
  {
    id: 14,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695565377/dianayjosebaja_13_de_33_b5sb0x.jpg",
    layout: "vertical",
    position: "center top",
  },
  {
    id: 15,
    url: "https://res.cloudinary.com/dkdhdy9e5/image/upload/q_auto,f_auto/v1695565377/dianayjosebaja_8_de_33_h3wt1a.jpg",
    layout: "vertical",
    position: "center top",
  },
];