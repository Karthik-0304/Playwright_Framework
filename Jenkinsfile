pipeline {
    agent any

    parameters {
        choice(
            name: "ENV",
            choices: ["qa", "staging"],
            description: "Select the environment"
        )
    }

    stages {

        stage("Checkout") {
            steps {
                git branch: "main",
                    url: "https://github.com/Karthik-0304/Playwright_Framework.git"
            }
        }

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
    }
}