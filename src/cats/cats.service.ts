import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';
import { faker } from '@faker-js/faker';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) 
    private readonly catModel: Model<Cat>
  ) {}

  async generate() {
    for (let index = 0; index < 20; index++) {
      const cat = {
        name: faker.person.firstName,
        age: faker.datatype.number({ max: 100 }),
        breed: faker.animal.cat(),
      };
      
      await this.catModel.create(cat);      
    }
    
    return 'ok';
  }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catModel.create(createCatDto);
    return createdCat;
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    return this.catModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.catModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
