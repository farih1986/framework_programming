import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty({message:"Judul diisi bang"})
    readonly title: string;

    @IsNotEmpty({message:"Author diisi bang"})
    readonly author: string;

    @IsNotEmpty({message:"Isbn diisi bang"})
    readonly isbn: string;

    @IsInt({message:"Tahun terbit harus berupa angka"})
    readonly publishedYear: number;
}