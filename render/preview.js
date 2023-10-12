let skinViewer = new skinview3d.SkinViewer({
    canvas: document.getElementById("skin_container_elytra"),
    width: 1024,
    height: 1024
});

skinViewer.loadCape("../assets/cape.png", { backEquipment: "elytra" });
skinViewer.fov = 66;

skinViewer.loadSkin("../assets/skin.png");

skinViewer.camera.rotation.z = -3.05
skinViewer.camera.rotation.y = -0.5
skinViewer.camera.rotation.x = -3.025
skinViewer.camera.position.z = -30
skinViewer.camera.position.y = 2.75
skinViewer.camera.position.x = -15
