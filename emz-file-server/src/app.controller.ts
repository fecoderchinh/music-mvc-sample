import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './helpers/file-upload.helper';
import { UploadFileDto } from './dto/upload.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBody({ type: UploadFileDto })
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @Post()
  @UseInterceptors(FilesInterceptor("images", 20, { 
      storage: diskStorage({
          destination: './uploads',
          filename: editFileName,
      }),
      fileFilter: imageFileFilter,
  }))
  async create( 
      @Body() body: UploadFileDto, 
      @UploadedFiles() images): Promise<any>
  {

      const imageUrls = images.map(file => file.filename);
      if( imageUrls.length > 0 ){
          body.images = imageUrls;
      }
      return { files: imageUrls };
  }
  

}
