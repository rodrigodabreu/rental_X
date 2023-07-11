import fileSystem from "fs";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {

    const stream = fileSystem.createReadStream(file.path)
    stream.pipe()
  }
}
export { ImportCategoryUseCase };
