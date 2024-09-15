import fs from 'fs';
import path from 'path';

const tempDir = path.resolve(__dirname, '../utilities/tempfolder'); // Directory for temporary files

/**
 * Creates a temporary file path based on the original file name and a timestamp.
 * @param {string} originalFileName - The name of the original file.
 * @returns {string} - The path to the temporary file.
 */
export function getTempFilePath(originalFileName) {
  const timestamp = Date.now();
  return path.resolve(tempDir, `${path.basename(originalFileName, path.extname(originalFileName))}_${timestamp}${path.extname(originalFileName)}`);
}

/**
 * Copies the original file to a new temporary file.
 * @param {string} originalFilePath - The path of the original file.
 * @param {string} tempFilePath - The path for the temporary file.
 */
export function createTempFile(originalFilePath, tempFilePath) {
  fs.copyFileSync(originalFilePath, tempFilePath);
}

/**
 * Deletes a temporary file.
 * @param {string} tempFilePath - The path to the temporary file.
 */
export function deleteTempFile(tempFilePath) {
  if (fs.existsSync(tempFilePath)) {
    fs.unlinkSync(tempFilePath);
  }
}
