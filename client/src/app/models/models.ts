
export interface Portfolio {
    id?: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    technologies: string;
    createdDate?: Date;
    isActive?: boolean;
}

export interface Skill {
    id?: number;
    name: string;
    proficiency: number;
    category: string;
}

export interface Contact {
    id?: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    sentDate?: Date;
}