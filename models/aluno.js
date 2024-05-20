/**
 * Arquivo: aluno.js
 * Descrição: Atividade Avaliativa API RestFul + CRUD + Node.JS + MongoDB
 * Instituição: Universidade La Salle
 * Curso: Análise e Desenvolvimento de Sistemas
 * Disciplina: Tópicos Especiais em ADS
 * Autor: Keoma da Silva
 * Data: 01/05/2024 
 *  
 */

// Define o modelo Aluno
const mongoose = require("mongoose");

const CursoSchema = new mongoose.Schema({
    nomeCurso: {
        type: String,
        required: true
    },
    semestre: {
        type: Number
    },
    tipo: {
        type: String
    },
    finalizado: {
        type: Boolean
    }
});

const AlunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number
    },
    curso: [CursoSchema]
});

const Aluno = mongoose.model('Aluno', AlunoSchema);
module.exports = Aluno;
