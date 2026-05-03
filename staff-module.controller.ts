import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StaffService } from './staff-module.service';
import { CreateRecordDto } from './dto/create-record.dto'; // Import your DTO

@Controller('api/v1/staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get('patients/:id')
  getHistory(@Param('id') id: string) {
    return this.staffService.getStudentHistory(+id);
  }

  @Post('records/:id')
  createRecord(
    @Param('id') id: string, 
    @Body() createRecordDto: CreateRecordDto // Use the DTO here
  ) {
    return this.staffService.addRecord(+id, createRecordDto);
  }
}