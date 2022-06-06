const TMDB_IMAGE = "https://image.tmdb.org/t/p/";

export const imageResize = (src: string, dimension: string = "w200") =>
  `${TMDB_IMAGE}${dimension}${src}`;
// ex: https://image.tmdb.org/t/p/w200/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg
export const imageOriginal = (src: string) => `${TMDB_IMAGE}original${src}`;
// ex: https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
