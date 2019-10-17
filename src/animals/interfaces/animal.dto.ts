export class AnimalTypeDto {
    readonly id: number;
}

export class AnimalDto {
    readonly name: string;
    readonly type: AnimalTypeDto;
    readonly age: number;
    readonly breed?: string;
}