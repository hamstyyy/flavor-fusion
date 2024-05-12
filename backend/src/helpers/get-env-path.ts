import path, { dirname } from 'path/posix';

export const getEnvFilePaths = (): string[] => {
  const srcFolder = dirname(require.main.filename);

  return [path.join(srcFolder, '..', 'env', `default.env`)];
};
