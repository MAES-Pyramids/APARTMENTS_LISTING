import { Req, Post, Body, Controller, UploadedFile } from '@nestjs/common';
import { Request } from 'express';
import { UploadFileInput } from '../inputs/upload-file.input';
import { Auth } from '../../../decorators/auth.decorator';
import { UploadFileSingle } from '../../../decorators/file.decorator';
import { ENUM_FILE_TYPE } from '../../../enums/file.enum';
import { FileType } from '../types/file.type';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('files')
@Controller('files')
export class UploaderController {
  constructor() {}

  @Post('images')
  @Auth({ allow: 'authenticated' })
  @UploadFileSingle('file', ENUM_FILE_TYPE.IMAGE, true)
  @ApiOperation({ summary: 'Upload an image file' })
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Image file upload',
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Image uploaded successfully',
    schema: { example: 'http://127.0.0.1:3333/nawy/storage/5e33-9dc6.jpg' },
  })
  @ApiResponse({ status: 400, description: 'Invalid file type' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async uploadImage(
    @UploadedFile() file: FileType,
    @Body() _: UploadFileInput,
    @Req() request: Request,
  ) {
    return `${request.protocol}://${request.get('host')}/${process.env.APP_NAME}/storage/${file.filename}`;
  }

  @Post('videos')
  @Auth({ allow: 'authenticated' })
  @UploadFileSingle('file', ENUM_FILE_TYPE.VIDEO, true)
  @ApiOperation({ summary: 'Upload a video file' })
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Video file upload',
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Video uploaded successfully',
    schema: { example: 'http://127.0.0.1:3333/nawy/storage/5e33-9dc6.jpg' },
  })
  @ApiResponse({ status: 400, description: 'Invalid file type' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async uploadVideo(
    @UploadedFile() file: FileType,
    @Body() _: UploadFileInput,
    @Req() request: Request,
  ) {
    return `${request.protocol}://${request.get('host')}/${process.env.APP_NAME}/storage/${file.filename}`;
  }
}
