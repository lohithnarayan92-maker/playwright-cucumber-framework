pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t playwright-cucumber-tests .'
            }
        }

        stage('Run Cucumber Tests') {
            steps {
                sh '''
                    docker run --rm \
                      -e BASE_URL="https://opensource-demo.orangehrmlive.com" \
                      -e BROWSER="chromium" \
                      -e HEADLESS="true" \
                      -e TIMEOUT="30000" \
                      playwright-cucumber-tests
                '''
            }
        }
    }
}