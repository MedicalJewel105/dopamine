import { Router } from '@angular/router';
import { IMock, Mock, Times } from 'typemoq';
import { BaseNavigationService } from './base-navigation.service';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
    let routerMock: IMock<Router>;
    let navigationService: BaseNavigationService;

    beforeEach(() => {
        routerMock = Mock.ofType<Router>();
        navigationService = new NavigationService(routerMock.object);
    });

    describe('navigateToLoading', () => {
        it('should navigate to loading', async () => {
            // Arrange

            // Act
            navigationService.navigateToLoading();

            // Assert
            routerMock.verify((x) => x.navigate(['/loading']), Times.exactly(1));
        });
    });

    describe('navigateToCollection', () => {
        it('should navigate to collection', async () => {
            // Arrange

            // Act
            navigationService.navigateToCollection();

            // Assert
            routerMock.verify((x) => x.navigate(['/collection']), Times.exactly(1));
        });
    });

    describe('navigateToWelcome', () => {
        it('should navigate to welcome', async () => {
            // Arrange

            // Act
            navigationService.navigateToWelcome();

            // Assert
            routerMock.verify((x) => x.navigate(['/welcome']), Times.exactly(1));
        });
    });

    describe('navigateToManageCollection', () => {
        it('should navigate to manage collection', async () => {
            // Arrange
            const routerMock: IMock<Router> = Mock.ofType<Router>();
            const navigationService: BaseNavigationService = new NavigationService(routerMock.object);

            // Act
            navigationService.navigateToManageCollection();

            // Assert
            routerMock.verify((x) => x.navigate(['/managecollection']), Times.exactly(1));
        });
    });

    describe('navigateToSettings', () => {
        it('should navigate to settings', async () => {
            // Arrange

            // Act
            navigationService.navigateToSettings();

            // Assert
            routerMock.verify((x) => x.navigate(['/settings']), Times.exactly(1));
        });
    });

    describe('navigateToInformation', () => {
        it('should navigate to information', async () => {
            // Arrange

            // Act
            navigationService.navigateToInformation();

            // Assert
            routerMock.verify((x) => x.navigate(['/information']), Times.exactly(1));
        });
    });
});