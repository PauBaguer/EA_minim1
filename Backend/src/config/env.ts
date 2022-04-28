export interface envConf {
  dbUrl: string;
  port: number;
}

export const production: envConf = {
  dbUrl: "mongodb://localhost:27017/examPau",
  port: 8080,
};

export const development: envConf = {
  dbUrl: "mongodb://localhost:27017/examPau",
  port: 3000,
};
