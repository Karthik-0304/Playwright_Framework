pipeline {
    agent any

    parameters {
        choice(
            name: "ENV",
            choices: ["qa", "staging"],
            description: "Select the environment"
        )
    }

    environment {
        BASE_URL = "https://www.saucedemo.com"
        CI = "true"
    }

    stages {

        stage("Install Dependencies") {
            steps {
                bat "npm ci"
            }
        }

        stage("Check Environment") {
            steps {
                bat "echo ENV=%ENV%"
                bat "echo BASE_URL=%BASE_URL%"
            }
        }

        stage("Run Playwright Tests") {
            steps {
                bat "npx playwright test"
            }
        }

        stage("Publish Allure Report") {
            steps {
                allure([
                    results: [[path: "allure-results"]]
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test-results/**/*',
                allowEmptyArchive: true
        }
    }
}