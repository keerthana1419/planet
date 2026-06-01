pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                checkout scm
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh '''
                    sudo cp -r /var/lib/jenkins/workspace/planet-deploy/* /var/www/html/
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed!'
        }
    }
}
