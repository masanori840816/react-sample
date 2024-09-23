declare global {
    namespace Potree {
        const PointSizeType = {
            FIXED: 0,
            ATTENUATED: 1,
            ADAPTIVE: 2
        };
        const PointShape = {
            SQUARE: 0,
            CIRCLE: 1,
            PARABOLOID: 2
        };

        class Viewer {
            scene: Scene;
            constructor(element: HTMLElement);

            setPointBudget(budget: number): void;
            loadPointCloud(path: string, name: string, callback?: (e: any) => void): void;
            setEDLEnabled(enabled: boolean): void;
            setFOV(fov: number): void;
            setBackground(color: string): void;
            fitToScreen(): void;
            loadSettingsFromURL(): void;
        }

        class PointCloudEventVariable {
            pointcloud: PointCloud;
        }
        class PointCloud {
            position: THREE.Vector3;
            scale: THREE.Vector3;
            material: PointCloudMaterial;
        }
        class Scene {
            addPointCloud(pointcloud: PointCloud): void;
        }
        class PointCloudMaterial {
            size: number;
            pointSizeType: PointSizeType;
            shape: PointShape;
        }
        function loadPointCloud(
            path: string,
            name: string,
            callback: (pointcloud: PointCloudEventVariable) => void
        ): void;
    }
}
export {};