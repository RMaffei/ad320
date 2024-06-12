import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';

interface Dog {
  id: number;
  name: string;
  age: number;
}

@Controller('dogs')
export class DogsController {
  private dogs: Dog[] = [];
  private idCounter = 1;

  @Get()
  getAllDogs(): Dog[] {
    return this.dogs;
  }

  @Post()
  createDog(@Body() dogData: { name: string; age: number }): Dog {
    const newDog: Dog = { id: this.idCounter++, ...dogData };
    this.dogs.push(newDog);
    return newDog;
  }

  @Get(':id')
  getDogById(@Param('id') id: number): Dog {
    const dog = this.dogs.find(d => d.id === Number(id));
    if (!dog) {
      throw new NotFoundException('Dog was not found');
    }
    return dog;
  }

  @Put(':id')
  updateDog(@Param('id') id: number, @Body() dogData: { name?: string; age?: number }): Dog {
    const dog = this.dogs.find(d => d.id === Number(id));
    if (!dog) {
      throw new NotFoundException('Dog was not found');
    }
    if (dogData.name) dog.name = dogData.name;
    if (dogData.age) dog.age = dogData.age;
    return dog;
  }

  @Delete(':id')
  deleteDog(@Param('id') id: number): { message: string } {
    const index = this.dogs.findIndex(d => d.id === Number(id));
    if (index === -1) {
      throw new NotFoundException('Dog was not found');
    }
    this.dogs.splice(index, 1);
    return { message: 'Dog has been deleted successfully' };
  }
}