import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicalRecord } from './entities/Medical-Record'; // Check this path
import { CreateRecordDto } from './dto/create-record.dto';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(MedicalRecord)
    private recordRepository: Repository<MedicalRecord>,
  ) {}

  async getStudentHistory(patientId: number) {
    return this.recordRepository.find({ 
        where: { 
            patient: patientId  as any
         },
        relations: ['patient'] // Add this if you want to see student details
    });
  }

  async addRecord(patientId: number, dto: CreateRecordDto) {
    const newRecord = this.recordRepository.create({
      ...dto,
      patient: { id: patientId } as any,
    });
    return this.recordRepository.save(newRecord);
  }
}