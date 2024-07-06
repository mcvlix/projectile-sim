import * as THREE from "three";
import Experience from "../Experience.js";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;
    this.scene.background = new THREE.Color("beige");
    // this.setSunLight()
    this.setAmbientLight();
    this.setEnvironmentMap()
  }
  setAmbientLight() {
    this.ambientLight = new THREE.AmbientLight("#ffffff", 2.0);
    this.scene.add(this.ambientLight);
  }

  // setSunLight()
  // {
  //     this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
  //     this.sunLight.castShadow = true
  //     this.sunLight.shadow.camera.far = 15
  //     this.sunLight.shadow.mapSize.set(1024, 1024)
  //     this.sunLight.shadow.normalBias = 0.05
  //     this.sunLight.position.set(3.5, 2, 10.25)
  //     this.scene.add(this.sunLight)

  //     // Debug
  //     if(this.debug.active)
  //     {
  //         this.debugFolder
  //             .add(this.sunLight, 'intensity')
  //             .name('sunLightIntensity')
  //             .min(0)
  //             .max(10)
  //             .step(0.001)

  //         this.debugFolder
  //             .add(this.sunLight.position, 'x')
  //             .name('sunLightX')
  //             .min(- 5)
  //             .max(5)
  //             .step(0.001)

  //         this.debugFolder
  //             .add(this.sunLight.position, 'y')
  //             .name('sunLightY')
  //             .min(- 5)
  //             .max(5)
  //             .step(0.001)

  //         this.debugFolder
  //             .add(this.sunLight.position, 'z')
  //             .name('sunLightZ')
  //             .min(- 5)
  //             .max(5)
  //             .step(0.001)
  //     }
  // }

  setEnvironmentMap()
  {
      this.environmentMap = {}
      this.environmentMap.intensity = 9.4
      this.environmentMap.texture.encoding = THREE.sRGBEncoding
      this.scene.environment = this.environmentMap.texture
  }
      // this.environmentMap.updateMaterials()

  //     // Debug
  //     // if(this.debug.active)
  //     // {
  //     //     this.debugFolder
  //     //         .add(this.environmentMap, 'intensity')
  //     //         .name('envMapIntensity')
  //     //         .min(0)
  //     //         .max(4)
  //     //         .step(0.001)
  //     //         .onChange(this.environmentMap.updateMaterials)
  //     // }
  // }
}
