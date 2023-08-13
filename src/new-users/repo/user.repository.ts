import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { NewUser } from '../entities/new-user.entity';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class UserRepository extends Repository<NewUser> {
  constructor(@InjectDataSource() private dataSource: DataSource) {
    super(NewUser, dataSource.createEntityManager());
  }
  findById(tableName: string, id: number): Promise<NewUser> {
    return this.query(`SELECT * FROM ${tableName} WHERE id=${id}`);
  }
}
