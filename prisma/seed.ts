import { PrismaClient } from "@prisma/client";


async function seed() {
  const prisma = new PrismaClient();

    await prisma.role.create({
        data: {
           name: "student",
           description: "Student Person who courses a pre-grade career", 
        },
        });

    await prisma.career.createMany({
        data: [
            {
                name: "Arquitectura",
                description: "Arquitectura"
              },
              {
                name: "Ingeniería Civil",
                description: "Ingeniería Civil"
              },
              {
                name: "Ingeniería Civil en Gestión de la Construcción",
                description: "Ingeniería Civil en Gestión de la Construcción"
              },
              {
                name: "Ingeniería Civil Plan Común",
                description: "Ingeniería Civil Plan Común"
              },
              {
                name: "Ingeniería en Construcción",
                description: "Ingeniería en Construcción"
              },
              {
                name: "Analista Químico",
                description: "Analista Químico"
              },
              {
                name: "Geología",
                description: "Geología"
              },
              {
                name: "Licenciatura en Física con mención en Astronomía",
                description: "Licenciatura en Física con mención en Astronomía"
              },
              {
                name: "Licenciatura en Matemática",
                description: "Licenciatura en Matemática"
              },
              {
                name: "Química Industrial",
                description: "Química Industrial"
              },
              {
                name: "Contador Auditor - Contador Público Diurno",
                description: "Contador Auditor - Contador Público Diurno"
              },
              {
                name: "Contador Auditor - Contador Público Vespertino",
                description: "Contador Auditor - Contador Público Vespertino"
              },
              {
                name: "Ingeniería Comercial",
                description: "Ingeniería Comercial"
              },
              {
                name: "Ingeniería en Información y Control de Gestión",
                description: "Ingeniería en Información y Control de Gestión"
              },
              {
                name: "Derecho",
                description: "Derecho"
              },
              {
                name: "Periodismo",
                description: "Periodismo"
              },
              {
                name: "Psicología",
                description: "Psicología"
              },
              {
                name: "Ingeniería Civil Ambiental",
                description: "Ingeniería Civil Ambiental"
              },
              {
                name: "Ingeniería Civil de Minas",
                description: "Ingeniería Civil de Minas"
              },
              {
                name: "Ingeniería Civil Electrónica",
                description: "Ingeniería Civil Electrónica"
              },
              {
                name: "Ingeniería Civil en Energía",
                description: "Ingeniería Civil en Energía"
              },
              {
                name: "Ingeniería Civil Industrial",
                description: "Ingeniería Civil Industrial"
              },
              {
                name: "Ingeniería Civil Metalúrgica",
                description: "Ingeniería Civil Metalúrgica"
              },
              {
                name: "Ingeniería Civil Química",
                description: "Ingeniería Civil Química"
              },
              {
                name: "Ingeniería en Metalurgia",
                description: "Ingeniería en Metalurgia"
              },
              {
                name: "Pedagogía en Educación Básica con Especialización",
                description: "Pedagogía en Educación Básica con Especialización"
              },
              {
                name: "Pedagogía en Educación Diferencial con Mención en Desarrollo Emocional y Cognitivo",
                description: "Pedagogía en Educación Diferencial con Mención en Desarrollo Emocional y Cognitivo"
              },
              {
                name: "Pedagogía en Educación Parvularia con Mención en Desarrollo Emocional y Cognitivo",
                description: "Pedagogía en Educación Parvularia con Mención en Desarrollo Emocional y Cognitivo"
              },
              {
                name: "Pedagogía en Inglés",
                description: "Pedagogía en Inglés"
              },
              {
                name: "Pedagogía en Matemática en Educación Media",
                description: "Pedagogía en Matemática en Educación Media"
              },
              {
                name: "Química y Farmacia",
                description: "Química y Farmacia"
              },
              {
                name: "Ingeniería Civil en Computación e Informática",
                description: "Ingeniería Civil en Computación e Informática"
              },
              {
                name: "Ingeniería en Computación e Informática",
                description: "Ingeniería en Computación e Informática"
              }


        ]
    });
    
    await prisma.user.create({
        data: {
            name            :"nicolas",
            firstLastName   :"gonzalez",
            secondLastName  :"caro",
            rut             :"19.284.736-2", 
            email           :"nicolas.gonzalez@alumnos.ucn.cl",  
            hashedPassword  :"$2b$10$oJtEydNcY71ZvZkwsrcmEuaHXmJBlzBePYWZf1Ump2beTjlppudvu",
            isEnable        :true,

            careerId        :1,
            roleId          :1
        }
    });

    prisma.$disconnect();

}
seed()
