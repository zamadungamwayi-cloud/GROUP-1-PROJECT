import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Add this
import { StaffController } from './staff-module.controller';
import { StaffService } from './staff-module.service';
import { MedicalRecord } from './entities/Medical-Record';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalRecord])],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule{}