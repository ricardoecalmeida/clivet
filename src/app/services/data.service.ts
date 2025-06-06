import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly DEFAULT_DATA = {
    "animais": [
      {
        "id": "a1",
        "nome": "Bobby",
        "especie": "Cão",
        "raca": "Labrador Retriever",
        "sexo": "M",
        "dataNascimento": "2018-06-12",
        "tutorId": "t1"
      },
      {
        "id": "a2",
        "nome": "Mimi",
        "especie": "Gato",
        "raca": "Siamês",
        "sexo": "F",
        "dataNascimento": "2020-11-03",
        "tutorId": "t2"
      },
      {
        "id": "a3",
        "nome": "Luna",
        "especie": "Cão",
        "raca": "Beagle",
        "sexo": "F",
        "dataNascimento": "2021-02-10",
        "tutorId": "t3"
      },
      {
        "id": "a4",
        "nome": "Max",
        "especie": "Gato",
        "raca": "Europeu Comum",
        "sexo": "M",
        "dataNascimento": "2017-09-08",
        "tutorId": "t4"
      },
      {
        "id": "a5",
        "nome": "Nina",
        "especie": "Cão",
        "raca": "Caniche",
        "sexo": "F",
        "dataNascimento": "2019-04-22",
        "tutorId": "t5"
      },
      {
        "id": "a6",
        "nome": "Tico",
        "especie": "Pássaro",
        "raca": "Periquito",
        "sexo": "M",
        "dataNascimento": "2022-01-15",
        "tutorId": "t6"
      },
      {
        "id": "a7",
        "nome": "Kira",
        "especie": "Gato",
        "raca": "Persa",
        "sexo": "F",
        "dataNascimento": "2015-07-09",
        "tutorId": "t7"
      },
      {
        "id": "a8",
        "nome": "Simba",
        "especie": "Cão",
        "raca": "Golden Retriever",
        "sexo": "M",
        "dataNascimento": "2020-10-05",
        "tutorId": "t8"
      },
      {
        "id": "a9",
        "nome": "Lola",
        "especie": "Gato",
        "raca": "Maine Coon",
        "sexo": "F",
        "dataNascimento": "2019-12-11",
        "tutorId": "t9"
      },
      {
        "id": "a10",
        "nome": "Thor",
        "especie": "Cão",
        "raca": "Boxer",
        "sexo": "M",
        "dataNascimento": "2016-03-20",
        "tutorId": "t10"
      },
      {
        "id": "a11",
        "nome": "Bolinha",
        "especie": "Coelho",
        "raca": "Mini Lop",
        "sexo": "F",
        "dataNascimento": "2022-06-15",
        "tutorId": "t11"
      },
      {
        "id": "a12",
        "nome": "Rocky",
        "especie": "Cão",
        "raca": "Bulldog Francês",
        "sexo": "M",
        "dataNascimento": "2021-08-07",
        "tutorId": "t12"
      },
      {
        "id": "a13",
        "nome": "Mafalda",
        "especie": "Gato",
        "raca": "Ragdoll",
        "sexo": "F",
        "dataNascimento": "2023-05-01",
        "tutorId": "t13"
      },
      {
        "id": "a14",
        "nome": "Pipoca",
        "especie": "Cão",
        "raca": "Yorkshire Terrier",
        "sexo": "F",
        "dataNascimento": "2020-01-28",
        "tutorId": "t14"
      },
      {
        "id": "a15",
        "nome": "Fred",
        "especie": "Cão",
        "raca": "Dálmata",
        "sexo": "M",
        "dataNascimento": "2018-10-19",
        "tutorId": "t15"
      },
      {
        "id": "a16",
        "nome": "Tuga",
        "especie": "Tartaruga",
        "raca": "Tigre-de-água",
        "sexo": "M",
        "dataNascimento": "2012-05-11",
        "tutorId": "t16"
      },
      {
        "id": "a17",
        "nome": "Zara",
        "especie": "Gato",
        "raca": "Bengal",
        "sexo": "F",
        "dataNascimento": "2020-09-14",
        "tutorId": "t17"
      },
      {
        "id": "a18",
        "nome": "Rex",
        "especie": "Cão",
        "raca": "Pastor Alemão",
        "sexo": "M",
        "dataNascimento": "2017-12-01",
        "tutorId": "t18"
      },
      {
        "id": "a19",
        "nome": "Mia",
        "especie": "Gato",
        "raca": "Sphynx",
        "sexo": "F",
        "dataNascimento": "2021-03-27",
        "tutorId": "t19"
      },
      {
        "id": "a20",
        "nome": "Zeus",
        "especie": "Cão",
        "raca": "Husky Siberiano",
        "sexo": "M",
        "dataNascimento": "2020-08-22",
        "tutorId": "t20"
      },
      {
        "id": "a21",
        "nome": "Neco",
        "especie": "Gato",
        "raca": "Europeu Comum",
        "sexo": "M",
        "dataNascimento": "2022-11-05",
        "tutorId": "t21"
      },
      {
        "id": "a22",
        "nome": "Lili",
        "especie": "Cão",
        "raca": "Shih Tzu",
        "sexo": "F",
        "dataNascimento": "2019-07-01",
        "tutorId": "t22"
      },
      {
        "id": "a23",
        "nome": "Snow",
        "especie": "Gato",
        "raca": "Angorá",
        "sexo": "F",
        "dataNascimento": "2020-12-25",
        "tutorId": "t23"
      },
      {
        "id": "a24",
        "nome": "Leo",
        "especie": "Cão",
        "raca": "Cocker Spaniel",
        "sexo": "M",
        "dataNascimento": "2016-02-18",
        "tutorId": "t24"
      },
      {
        "id": "a25",
        "nome": "Amy",
        "especie": "Gato",
        "raca": "Scottish Fold",
        "sexo": "F",
        "dataNascimento": "2021-06-14",
        "tutorId": "t25"
      },
      {
        "id": "a26",
        "nome": "Ginger",
        "especie": "Gato",
        "raca": "Abyssinian",
        "sexo": "F",
        "dataNascimento": "2020-05-19",
        "tutorId": "t26"
      },
      {
        "id": "a27",
        "nome": "Trovão",
        "especie": "Cão",
        "raca": "Rottweiler",
        "sexo": "M",
        "dataNascimento": "2017-11-03",
        "tutorId": "t26"
      },
      {
        "id": "a28",
        "nome": "Mel",
        "especie": "Gato",
        "raca": "British Shorthair",
        "sexo": "F",
        "dataNascimento": "2023-02-20",
        "tutorId": "t27"
      },
      {
        "id": "a29",
        "nome": "Bart",
        "especie": "Cão",
        "raca": "Buldogue Inglês",
        "sexo": "M",
        "dataNascimento": "2016-08-30",
        "tutorId": "t27"
      },
      {
        "id": "a30",
        "nome": "Faísca",
        "especie": "Gato",
        "raca": "Norueguês da Floresta",
        "sexo": "M",
        "dataNascimento": "2019-09-12",
        "tutorId": "t28"
      },
      {
        "id": "a31",
        "nome": "Luna",
        "especie": "Coelho",
        "raca": "Holland Lop",
        "sexo": "F",
        "dataNascimento": "2022-04-10",
        "tutorId": "t29"
      },
      {
        "id": "a32",
        "nome": "Ziggy",
        "especie": "Cão",
        "raca": "Border Collie",
        "sexo": "M",
        "dataNascimento": "2018-01-02",
        "tutorId": "t30"
      },
      {
        "id": "a33",
        "nome": "Kiko",
        "especie": "Cão",
        "raca": "Pinscher",
        "sexo": "M",
        "dataNascimento": "2017-03-09",
        "tutorId": "t1"
      },
      {
        "id": "a34",
        "nome": "Margarida",
        "especie": "Gato",
        "raca": "Siamês",
        "sexo": "F",
        "dataNascimento": "2021-10-15",
        "tutorId": "t2"
      },
      {
        "id": "a35",
        "nome": "Ruca",
        "especie": "Cão",
        "raca": "Labrador Retriever",
        "sexo": "M",
        "dataNascimento": "2020-06-05",
        "tutorId": "t3"
      },
      {
        "id": "a36",
        "nome": "Teca",
        "especie": "Gato",
        "raca": "Europeu Comum",
        "sexo": "F",
        "dataNascimento": "2018-09-07",
        "tutorId": "t4"
      },
      {
        "id": "a37",
        "nome": "Jade",
        "especie": "Cão",
        "raca": "Shiba Inu",
        "sexo": "F",
        "dataNascimento": "2022-03-14",
        "tutorId": "t5"
      },
      {
        "id": "a38",
        "nome": "Baco",
        "especie": "Cão",
        "raca": "Pug",
        "sexo": "M",
        "dataNascimento": "2019-05-23",
        "tutorId": "t6"
      },
      {
        "id": "a39",
        "nome": "Sushi",
        "especie": "Gato",
        "raca": "Oriental",
        "sexo": "M",
        "dataNascimento": "2020-07-29",
        "tutorId": "t7"
      },
      {
        "id": "a40",
        "nome": "Maggie",
        "especie": "Cão",
        "raca": "Setter Irlandês",
        "sexo": "F",
        "dataNascimento": "2015-04-16",
        "tutorId": "t8"
      },
      {
        "id": "a41",
        "nome": "Pompom",
        "especie": "Coelho",
        "raca": "Angorá",
        "sexo": "F",
        "dataNascimento": "2021-08-12",
        "tutorId": "t9"
      },
      {
        "id": "a42",
        "nome": "Frajola",
        "especie": "Gato",
        "raca": "Europeu Comum",
        "sexo": "M",
        "dataNascimento": "2016-12-09",
        "tutorId": "t10"
      },
      {
        "id": "a43",
        "nome": "Lily",
        "especie": "Cão",
        "raca": "Cavalier King Charles",
        "sexo": "F",
        "dataNascimento": "2019-03-08",
        "tutorId": "t11"
      },
      {
        "id": "a44",
        "nome": "Chico",
        "especie": "Pássaro",
        "raca": "Canário",
        "sexo": "M",
        "dataNascimento": "2023-04-01",
        "tutorId": "t12"
      },
      {
        "id": "a45",
        "nome": "Tina",
        "especie": "Gato",
        "raca": "Maine Coon",
        "sexo": "F",
        "dataNascimento": "2020-10-10",
        "tutorId": "t13"
      },
      {
        "id": "a46",
        "nome": "Óscar",
        "especie": "Cão",
        "raca": "Terrier Escocês",
        "sexo": "M",
        "dataNascimento": "2018-02-19",
        "tutorId": "t14"
      },
      {
        "id": "a47",
        "nome": "Bia",
        "especie": "Gato",
        "raca": "Persa",
        "sexo": "F",
        "dataNascimento": "2021-01-01",
        "tutorId": "t15"
      },
      {
        "id": "a48",
        "nome": "Caramelo",
        "especie": "Cão",
        "raca": "Podengo",
        "sexo": "M",
        "dataNascimento": "2019-10-03",
        "tutorId": "t16"
      },
      {
        "id": "a49",
        "nome": "Fifi",
        "especie": "Gato",
        "raca": "Exótico de Pelo Curto",
        "sexo": "F",
        "dataNascimento": "2020-06-30",
        "tutorId": "t17"
      },
      {
        "id": "a50",
        "nome": "Bolt",
        "especie": "Cão",
        "raca": "Doberman",
        "sexo": "M",
        "dataNascimento": "2018-06-01",
        "tutorId": "t18"
      }
    ],
    "marcacoes": [
      {
        "id": "m1",
        "tipo": "Consulta geral",
        "animalId": "a1",
        "tutorId": "t1",
        "dataHora": "2024-01-15T10:00:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m2",
        "tipo": "Vacinação",
        "animalId": "a5",
        "tutorId": "t3",
        "dataHora": "2024-02-02T11:00:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m3",
        "tipo": "Desparasitação",
        "animalId": "a8",
        "tutorId": "t5",
        "dataHora": "2024-03-11T09:30:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m4",
        "tipo": "Consulta de seguimento",
        "animalId": "a10",
        "tutorId": "t7",
        "dataHora": "2024-04-17T15:00:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m5",
        "tipo": "Banho e tosquia",
        "animalId": "a2",
        "tutorId": "t1",
        "dataHora": "2024-05-10T09:00:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m6",
        "tipo": "Consulta geral",
        "animalId": "a13",
        "tutorId": "t9",
        "dataHora": "2024-06-03T14:00:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m7",
        "tipo": "Vacinação",
        "animalId": "a17",
        "tutorId": "t11",
        "dataHora": "2024-07-22T10:30:00",
        "realizada": true,
        "cancelada": true
      },
      {
        "id": "m8",
        "tipo": "Consulta de urgência",
        "animalId": "a20",
        "tutorId": "t13",
        "dataHora": "2024-08-01T11:45:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m9",
        "tipo": "Desparasitação",
        "animalId": "a26",
        "tutorId": "t17",
        "dataHora": "2024-09-09T09:15:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m10",
        "tipo": "Consulta dermatológica",
        "animalId": "a31",
        "tutorId": "t21",
        "dataHora": "2024-10-28T14:45:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m11",
        "tipo": "Consulta geral",
        "animalId": "a35",
        "tutorId": "t23",
        "dataHora": "2024-11-14T10:30:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m12",
        "tipo": "Vacinação",
        "animalId": "a38",
        "tutorId": "t25",
        "dataHora": "2024-12-05T15:15:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m13",
        "tipo": "Consulta de urgência",
        "animalId": "a41",
        "tutorId": "t27",
        "dataHora": "2025-01-20T09:00:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m14",
        "tipo": "Desparasitação",
        "animalId": "a43",
        "tutorId": "t29",
        "dataHora": "2025-02-10T14:30:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m15",
        "tipo": "Consulta geral",
        "animalId": "a46",
        "tutorId": "t30",
        "dataHora": "2025-03-03T10:00:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m16",
        "tipo": "Consulta de seguimento",
        "animalId": "a47",
        "tutorId": "t30",
        "dataHora": "2025-03-17T15:00:00",
        "realizada": true,
        "cancelada": true
      },
      {
        "id": "m17",
        "tipo": "Consulta geral",
        "animalId": "a6",
        "tutorId": "t4",
        "dataHora": "2025-04-07T11:00:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m18",
        "tipo": "Banho e tosquia",
        "animalId": "a14",
        "tutorId": "t9",
        "dataHora": "2025-04-18T09:45:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m19",
        "tipo": "Consulta de urgência",
        "animalId": "a19",
        "tutorId": "t13",
        "dataHora": "2025-04-25T10:30:00",
        "realizada": true,
        "cancelada": false
      },
      {
        "id": "m20",
        "tipo": "Vacinação",
        "animalId": "a44",
        "tutorId": "t29",
        "dataHora": "2025-05-10T11:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m21",
        "tipo": "Consulta geral",
        "animalId": "a12",
        "tutorId": "t8",
        "dataHora": "2025-05-13T10:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m22",
        "tipo": "Desparasitação",
        "animalId": "a28",
        "tutorId": "t19",
        "dataHora": "2025-05-14T09:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m23",
        "tipo": "Vacinação",
        "animalId": "a39",
        "tutorId": "t26",
        "dataHora": "2025-05-15T14:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m24",
        "tipo": "Consulta de urgência",
        "animalId": "a16",
        "tutorId": "t11",
        "dataHora": "2025-05-16T11:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m25",
        "tipo": "Consulta geral",
        "animalId": "a3",
        "tutorId": "t2",
        "dataHora": "2025-05-17T09:30:00",
        "realizada": false,
        "cancelada": true
      },
      {
        "id": "m26",
        "tipo": "Consulta dermatológica",
        "animalId": "a22",
        "tutorId": "t15",
        "dataHora": "2025-05-20T14:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m27",
        "tipo": "Consulta de seguimento",
        "animalId": "a18",
        "tutorId": "t12",
        "dataHora": "2025-05-21T11:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m28",
        "tipo": "Vacinação",
        "animalId": "a23",
        "tutorId": "t15",
        "dataHora": "2025-05-22T09:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m29",
        "tipo": "Consulta geral",
        "animalId": "a36",
        "tutorId": "t24",
        "dataHora": "2025-05-23T14:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m30",
        "tipo": "Consulta ortopédica",
        "animalId": "a9",
        "tutorId": "t6",
        "dataHora": "2025-05-24T10:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m31",
        "tipo": "Banho e tosquia",
        "animalId": "a33",
        "tutorId": "t22",
        "dataHora": "2025-05-27T09:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m32",
        "tipo": "Consulta de seguimento",
        "animalId": "a30",
        "tutorId": "t20",
        "dataHora": "2025-05-28T14:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m33",
        "tipo": "Consulta geral",
        "animalId": "a45",
        "tutorId": "t30",
        "dataHora": "2025-05-29T10:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m34",
        "tipo": "Vacinação",
        "animalId": "a24",
        "tutorId": "t16",
        "dataHora": "2025-05-30T09:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m35",
        "tipo": "Consulta oftalmológica",
        "animalId": "a15",
        "tutorId": "t10",
        "dataHora": "2025-06-03T11:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m36",
        "tipo": "Consulta de urgência",
        "animalId": "a4",
        "tutorId": "t2",
        "dataHora": "2025-06-04T14:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m37",
        "tipo": "Consulta geral",
        "animalId": "a7",
        "tutorId": "t4",
        "dataHora": "2025-06-05T10:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m38",
        "tipo": "Consulta de seguimento",
        "animalId": "a11",
        "tutorId": "t8",
        "dataHora": "2025-06-06T09:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m39",
        "tipo": "Vacinação",
        "animalId": "a29",
        "tutorId": "t19",
        "dataHora": "2025-06-07T09:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m40",
        "tipo": "Consulta dermatológica",
        "animalId": "a32",
        "tutorId": "t21",
        "dataHora": "2025-06-10T11:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m41",
        "tipo": "Consulta geral",
        "animalId": "a21",
        "tutorId": "t14",
        "dataHora": "2025-06-11T10:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m42",
        "tipo": "Consulta ortopédica",
        "animalId": "a40",
        "tutorId": "t26",
        "dataHora": "2025-06-12T14:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m43",
        "tipo": "Banho e tosquia",
        "animalId": "a25",
        "tutorId": "t17",
        "dataHora": "2025-06-13T11:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m44",
        "tipo": "Consulta dermatológica",
        "animalId": "a48",
        "tutorId": "t30",
        "dataHora": "2025-06-14T09:15:00",
        "realizada": false,
        "cancelada": true
      },
      {
        "id": "m45",
        "tipo": "Consulta geral",
        "animalId": "a27",
        "tutorId": "t18",
        "dataHora": "2025-06-17T14:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m46",
        "tipo": "Vacinação",
        "animalId": "a34",
        "tutorId": "t22",
        "dataHora": "2025-06-18T09:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m47",
        "tipo": "Consulta de urgência",
        "animalId": "a49",
        "tutorId": "t30",
        "dataHora": "2025-06-19T10:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m48",
        "tipo": "Consulta geral",
        "animalId": "a37",
        "tutorId": "t24",
        "dataHora": "2025-06-20T14:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m49",
        "tipo": "Consulta oftalmológica",
        "animalId": "a50",
        "tutorId": "t30",
        "dataHora": "2025-06-21T11:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m50",
        "tipo": "Consulta de seguimento",
        "animalId": "a42",
        "tutorId": "t28",
        "dataHora": "2025-06-24T09:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m51",
        "tipo": "Consulta geral",
        "animalId": "a1",
        "tutorId": "t1",
        "dataHora": "2025-06-25T10:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m52",
        "tipo": "Consulta ortopédica",
        "animalId": "a6",
        "tutorId": "t4",
        "dataHora": "2025-06-26T14:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m53",
        "tipo": "Vacinação",
        "animalId": "a2",
        "tutorId": "t1",
        "dataHora": "2025-06-27T09:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m54",
        "tipo": "Consulta de seguimento",
        "animalId": "a10",
        "tutorId": "t7",
        "dataHora": "2025-06-28T10:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m55",
        "tipo": "Banho e tosquia",
        "animalId": "a8",
        "tutorId": "t5",
        "dataHora": "2025-07-01T11:30:00",
        "realizada": false,
        "cancelada": true
      },
      {
        "id": "m56",
        "tipo": "Consulta geral",
        "animalId": "a11",
        "tutorId": "t8",
        "dataHora": "2025-07-02T09:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m57",
        "tipo": "Vacinação",
        "animalId": "a15",
        "tutorId": "t10",
        "dataHora": "2025-07-03T14:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m58",
        "tipo": "Consulta dermatológica",
        "animalId": "a20",
        "tutorId": "t13",
        "dataHora": "2025-07-04T10:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m59",
        "tipo": "Consulta de urgência",
        "animalId": "a3",
        "tutorId": "t2",
        "dataHora": "2025-07-05T09:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m60",
        "tipo": "Consulta geral",
        "animalId": "a7",
        "tutorId": "t4",
        "dataHora": "2025-07-08T14:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m61",
        "tipo": "Consulta geral",
        "animalId": "a5",
        "tutorId": "t3",
        "dataHora": "2025-07-09T09:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m62",
        "tipo": "Consulta oftalmológica",
        "animalId": "a13",
        "tutorId": "t9",
        "dataHora": "2025-07-10T10:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m63",
        "tipo": "Vacinação",
        "animalId": "a26",
        "tutorId": "t17",
        "dataHora": "2025-07-11T14:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m64",
        "tipo": "Consulta de urgência",
        "animalId": "a14",
        "tutorId": "t9",
        "dataHora": "2025-07-12T10:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m65",
        "tipo": "Consulta dermatológica",
        "animalId": "a17",
        "tutorId": "t12",
        "dataHora": "2025-07-15T09:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m66",
        "tipo": "Consulta geral",
        "animalId": "a31",
        "tutorId": "t21",
        "dataHora": "2025-07-16T11:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m67",
        "tipo": "Banho e tosquia",
        "animalId": "a46",
        "tutorId": "t29",
        "dataHora": "2025-07-17T14:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m68",
        "tipo": "Consulta de seguimento",
        "animalId": "a19",
        "tutorId": "t13",
        "dataHora": "2025-07-18T10:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m69",
        "tipo": "Consulta geral",
        "animalId": "a43",
        "tutorId": "t28",
        "dataHora": "2025-07-19T11:00:00",
        "realizada": false,
        "cancelada": true
      },
      {
        "id": "m70",
        "tipo": "Vacinação",
        "animalId": "a44",
        "tutorId": "t29",
        "dataHora": "2025-07-22T09:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m71",
        "tipo": "Consulta geral",
        "animalId": "a38",
        "tutorId": "t25",
        "dataHora": "2025-07-23T14:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m72",
        "tipo": "Consulta dermatológica",
        "animalId": "a35",
        "tutorId": "t23",
        "dataHora": "2025-07-24T10:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m73",
        "tipo": "Consulta de urgência",
        "animalId": "a47",
        "tutorId": "t29",
        "dataHora": "2025-07-25T09:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m74",
        "tipo": "Consulta geral",
        "animalId": "a41",
        "tutorId": "t27",
        "dataHora": "2025-07-26T10:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m75",
        "tipo": "Consulta de seguimento",
        "animalId": "a12",
        "tutorId": "t8",
        "dataHora": "2025-07-29T09:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m76",
        "tipo": "Vacinação",
        "animalId": "a28",
        "tutorId": "t19",
        "dataHora": "2025-07-30T14:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m77",
        "tipo": "Consulta oftalmológica",
        "animalId": "a16",
        "tutorId": "t11",
        "dataHora": "2025-07-31T10:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m78",
        "tipo": "Consulta geral",
        "animalId": "a18",
        "tutorId": "t12",
        "dataHora": "2025-08-01T09:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m79",
        "tipo": "Consulta dermatológica",
        "animalId": "a23",
        "tutorId": "t15",
        "dataHora": "2025-08-02T10:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m80",
        "tipo": "Consulta geral",
        "animalId": "a36",
        "tutorId": "t24",
        "dataHora": "2025-08-05T14:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m81",
        "tipo": "Consulta de seguimento",
        "animalId": "a4",
        "tutorId": "t2",
        "dataHora": "2025-08-06T09:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m82",
        "tipo": "Consulta geral",
        "animalId": "a9",
        "tutorId": "t6",
        "dataHora": "2025-08-07T14:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m83",
        "tipo": "Vacinação",
        "animalId": "a30",
        "tutorId": "t20",
        "dataHora": "2025-08-08T10:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m84",
        "tipo": "Consulta dermatológica",
        "animalId": "a22",
        "tutorId": "t14",
        "dataHora": "2025-08-09T09:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m85",
        "tipo": "Consulta de urgência",
        "animalId": "a32",
        "tutorId": "t21",
        "dataHora": "2025-08-12T14:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m86",
        "tipo": "Banho e tosquia",
        "animalId": "a45",
        "tutorId": "t29",
        "dataHora": "2025-08-13T11:15:00",
        "realizada": false,
        "cancelada": true
      },
      {
        "id": "m87",
        "tipo": "Consulta geral",
        "animalId": "a24",
        "tutorId": "t16",
        "dataHora": "2025-08-14T09:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m88",
        "tipo": "Consulta ortopédica",
        "animalId": "a33",
        "tutorId": "t22",
        "dataHora": "2025-08-15T10:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m89",
        "tipo": "Consulta oftalmológica",
        "animalId": "a39",
        "tutorId": "t26",
        "dataHora": "2025-08-16T11:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m90",
        "tipo": "Consulta de seguimento",
        "animalId": "a29",
        "tutorId": "t19",
        "dataHora": "2025-08-19T09:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m91",
        "tipo": "Consulta geral",
        "animalId": "a6",
        "tutorId": "t4",
        "dataHora": "2025-08-20T14:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m92",
        "tipo": "Vacinação",
        "animalId": "a10",
        "tutorId": "t7",
        "dataHora": "2025-08-21T09:45:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m93",
        "tipo": "Consulta dermatológica",
        "animalId": "a50",
        "tutorId": "t30",
        "dataHora": "2025-08-22T11:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m94",
        "tipo": "Consulta de urgência",
        "animalId": "a5",
        "tutorId": "t3",
        "dataHora": "2025-08-23T09:15:00",
        "realizada": false,
        "cancelada": true
      },
      {
        "id": "m95",
        "tipo": "Consulta geral",
        "animalId": "a7",
        "tutorId": "t4",
        "dataHora": "2025-08-26T10:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m96",
        "tipo": "Consulta de seguimento",
        "animalId": "a11",
        "tutorId": "t8",
        "dataHora": "2025-08-27T14:00:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m97",
        "tipo": "Consulta oftalmológica",
        "animalId": "a18",
        "tutorId": "t12",
        "dataHora": "2025-08-28T09:30:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m98",
        "tipo": "Banho e tosquia",
        "animalId": "a8",
        "tutorId": "t5",
        "dataHora": "2025-08-29T10:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m99",
        "tipo": "Consulta dermatológica",
        "animalId": "a34",
        "tutorId": "t22",
        "dataHora": "2025-08-30T11:15:00",
        "realizada": false,
        "cancelada": false
      },
      {
        "id": "m100",
        "tipo": "Consulta geral",
        "animalId": "a40",
        "tutorId": "t26",
        "dataHora": "2025-09-02T09:45:00",
        "realizada": false,
        "cancelada": false
      }
    ],
    "tutores": [
      {
        "id": "t1",
        "nome": "Carlos Ferreira",
        "telemovel": "918234567",
        "email": "carlos.ferreira@gmail.com",
        "animais": [
          "a1",
          "a2"
        ]
      },
      {
        "id": "t2",
        "nome": "Sofia Costa",
        "telemovel": "926345678",
        "email": "sofia.costa@outlook.com",
        "animais": [
          "a3"
        ]
      },
      {
        "id": "t3",
        "nome": "Tiago Lopes",
        "telemovel": "937456789",
        "email": "tiago.lopes@gmail.com",
        "animais": [
          "a4",
          "a5"
        ]
      },
      {
        "id": "t4",
        "nome": "Ana Martins",
        "telemovel": "961234567",
        "email": "ana.martins@gmail.com",
        "animais": [
          "a6"
        ]
      },
      {
        "id": "t5",
        "nome": "Ricardo Silva",
        "telemovel": "913456789",
        "email": "ricardo.silva@outlook.com",
        "animais": [
          "a7",
          "a8"
        ]
      },
      {
        "id": "t6",
        "nome": "Margarida Rocha",
        "telemovel": "924567891",
        "email": "margarida.rocha@gmail.com",
        "animais": [
          "a9"
        ]
      },
      {
        "id": "t7",
        "nome": "Bruno Moreira",
        "telemovel": "934567892",
        "email": "bruno.moreira@outlook.com",
        "animais": [
          "a10",
          "a11"
        ]
      },
      {
        "id": "t8",
        "nome": "Inês Pires",
        "telemovel": "964567893",
        "email": "ines.pires@gmail.com",
        "animais": [
          "a12"
        ]
      },
      {
        "id": "t9",
        "nome": "João Neves",
        "telemovel": "919876543",
        "email": "joao.neves@gmail.com",
        "animais": [
          "a13",
          "a14"
        ]
      },
      {
        "id": "t10",
        "nome": "Helena Batista",
        "telemovel": "923456789",
        "email": "helena.batista@outlook.com",
        "animais": [
          "a15"
        ]
      },
      {
        "id": "t11",
        "nome": "Pedro Mendes",
        "telemovel": "917654321",
        "email": "pedro.mendes@gmail.com",
        "animais": [
          "a16",
          "a17"
        ]
      },
      {
        "id": "t12",
        "nome": "Liliana Fonseca",
        "telemovel": "929876543",
        "email": "liliana.fonseca@outlook.com",
        "animais": [
          "a18"
        ]
      },
      {
        "id": "t13",
        "nome": "Joana Ribeiro",
        "telemovel": "936789012",
        "email": "joana.ribeiro@gmail.com",
        "animais": [
          "a19",
          "a20"
        ]
      },
      {
        "id": "t14",
        "nome": "Miguel Carvalho",
        "telemovel": "965432189",
        "email": "miguel.carvalho@outlook.com",
        "animais": [
          "a21"
        ]
      },
      {
        "id": "t15",
        "nome": "Patrícia Oliveira",
        "telemovel": "913210987",
        "email": "patricia.oliveira@gmail.com",
        "animais": [
          "a22",
          "a23"
        ]
      },
      {
        "id": "t16",
        "nome": "André Matos",
        "telemovel": "922345678",
        "email": "andre.matos@outlook.com",
        "animais": [
          "a24"
        ]
      },
      {
        "id": "t17",
        "nome": "Cátia Marques",
        "telemovel": "931234567",
        "email": "catia.marques@gmail.com",
        "animais": [
          "a25",
          "a26"
        ]
      },
      {
        "id": "t18",
        "nome": "Diogo Lima",
        "telemovel": "961111222",
        "email": "diogo.lima@gmail.com",
        "animais": [
          "a27"
        ]
      },
      {
        "id": "t19",
        "nome": "Filipa Nogueira",
        "telemovel": "914789321",
        "email": "filipa.nogueira@outlook.com",
        "animais": [
          "a28",
          "a29"
        ]
      },
      {
        "id": "t20",
        "nome": "Luís Teixeira",
        "telemovel": "927654321",
        "email": "luis.teixeira@gmail.com",
        "animais": [
          "a30"
        ]
      },
      {
        "id": "t21",
        "nome": "Raquel Antunes",
        "telemovel": "938765432",
        "email": "raquel.antunes@outlook.com",
        "animais": [
          "a31",
          "a32"
        ]
      },
      {
        "id": "t22",
        "nome": "Daniel Correia",
        "telemovel": "966789012",
        "email": "daniel.correia@gmail.com",
        "animais": [
          "a33"
        ]
      },
      {
        "id": "t23",
        "nome": "Susana Pinto",
        "telemovel": "915678901",
        "email": "susana.pinto@outlook.com",
        "animais": [
          "a34",
          "a35"
        ]
      },
      {
        "id": "t24",
        "nome": "Marco Santos",
        "telemovel": "924321098",
        "email": "marco.santos@gmail.com",
        "animais": [
          "a36"
        ]
      },
      {
        "id": "t25",
        "nome": "Vera Cunha",
        "telemovel": "934567891",
        "email": "vera.cunha@outlook.com",
        "animais": [
          "a37",
          "a38"
        ]
      },
      {
        "id": "t26",
        "nome": "Bruno Figueiredo",
        "telemovel": "963210987",
        "email": "bruno.figueiredo@gmail.com",
        "animais": [
          "a39"
        ]
      },
      {
        "id": "t27",
        "nome": "Renata Lopes",
        "telemovel": "911234568",
        "email": "renata.lopes@outlook.com",
        "animais": [
          "a40",
          "a41"
        ]
      },
      {
        "id": "t28",
        "nome": "Alexandre Sousa",
        "telemovel": "928765432",
        "email": "alexandre.sousa@gmail.com",
        "animais": [
          "a42"
        ]
      },
      {
        "id": "t29",
        "nome": "Marta Cardoso",
        "telemovel": "936789543",
        "email": "marta.cardoso@outlook.com",
        "animais": [
          "a43",
          "a44"
        ]
      },
      {
        "id": "t30",
        "nome": "Paulo Gomes",
        "telemovel": "916789654",
        "email": "paulo.gomes@gmail.com",
        "animais": [
          "a45",
          "a46",
          "a47"
        ]
      }
    ]
  };

  public dataChanged = new Subject<void>();

  constructor() { }

  getData() {
    const localData = localStorage.getItem(environment.localStorageKey);
    return localData ? JSON.parse(localData) : this.resetData();
  }

  updateData(newData: any) {
    localStorage.setItem(environment.localStorageKey, JSON.stringify(newData));
    if (environment.enableDebug) {
      console.log('Dados atualizados:', newData);
    }
  }

  resetData() {
    localStorage.setItem('vetData', JSON.stringify(this.DEFAULT_DATA));
    this.dataChanged.next();
    return this.DEFAULT_DATA;
  }

  startAutoReset(intervalMinutes = 30) {
    setInterval(() => {
      this.resetData();
      console.log('Data reset');
    }, intervalMinutes * 60 * 1000);
  }
}
