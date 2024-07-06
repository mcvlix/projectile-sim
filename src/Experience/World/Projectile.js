import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Projectile
{
    constructor()
    {
        this.name = 'Projectile'
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
        
    }

    setGeometry()
    {
        this.geometry = new THREE.TorusKnotGeometry()
        // this.geometry = new THREE.PlaneGeometry(1,1,100,100)
    }

    setTextures()
    {
        this.textures = {}
    }

    setMaterial()
    {
        // this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide, wireframe: true})
        this.material = new THREE.MeshNormalMaterial()
    }
    setMesh()
    {

        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.receiveShadow = true
        this.mesh.name = this.name
        this.scene.add(this.mesh)

        this.mesh.scale.y = 1.0
        this.mesh.position.y = 1
    }
    
    update() 
    {
        this.material.uniforms.uTime.value = this.experience.time.elapsed
    }
}