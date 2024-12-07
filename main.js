let scene,camera, renderer, cube;



// シーン
scene = new THREE.Scene();
// THREE.Sceneとは3dオブジェクトやライト、カメラなどを管理するコンテナ
// シーンは、3Dオブジェクト、カメラ、ライトなど、描画されるすべての要素を含んでいます

// カメラ
camera = new THREE.PerspectiveCamera(
    85, // 視野角
    // 85 は視野角を度単位で指定しています。視野角が広いほど、カメラから見える範囲が広くなります。
// 一般的に、視野角は60度前後が自然に感じられることが多いですが、85 のように広くすると、広角レンズのような効果になります。

    window.innerWidth / window.innerHeight, // アスペクト比
    // window.innerWidth / window.innerHeight はウィンドウの幅と高さの比率です。これにより、カメラの縦横比がウィンドウに合わせて調整され、シーンが歪んで表示されるのを防ぎます。

    0.1, // ニア
    // ニアクリップはカメラから近すぎる物体を描画しないために使用されます。適切な設定により、近距離の物体の表示問題を防ぎつつ、描画のパフォーマンスを最適化することができます。

    1000 // ファー
    // つまり、カメラから1000単位の距離より遠くにあるオブジェクトは描画されません。
);

// レンダラー
// カメラ、ライト、3Dオブジェクト、テクスチャなどを基にして、最終的に画面に表示するビジュアルを生成する
renderer = new THREE.WebGLRenderer();
// Three.jsが使用するレンダラーの一つで、WebGLを利用して3Dグラフィックスを描画します。

renderer.setSize(window.innerWidth, window.innerHeight);
// レンダラーがウィンドウのサイズに合わせて動的に調整されます。ウィンドウサイズが変わると、3Dシーンの描画サイズも自動的に更新されるので、シーンが適切に表示され続けます。

document.body.appendChild(renderer.domElement);
// renderer.domElement は、WebGLRenderer の描画結果を表示するための <canvas> 要素 を指します
// この <canvas> は、レンダラーが生成し、シーンを描画するために使用します。
// renderer.domElementは、その描画結果を表示するためのHTMLの<canvas>要素です。この<canvas>をブラウザのページに追加しないと、描画された3Dシーンはどこにも表示されません。
// renderer.domElement は Three.js の レンダラー が描画した結果を含む <canvas> 要素を指しま

// ボックスのサイズ決定、メッシュ、追加
const geometry = new THREE.BoxGeometry(2, 2, 2); // (幅, 高さ, 奥行き)
const material = new THREE.MeshBasicMaterial({ color: "#1111" });
// Three.js の マテリアル（材質） の一つで、オブジェクトの表面を描画するための基本的な色を指定します。


cube = new THREE.Mesh(geometry, material);
// THREE.Mesh は、ジオメトリとマテリアルを組み合わせて、実際にシーンに表示される3Dオブジェクト（メッシュ）を作成します。

scene.add(cube);// シーンにcubeを追加している
// scene.add(object) は、指定した 3Dオブジェクト（ここではcube）をシーンに追加するメソッドです。これにより、そのオブジェクトがレンダラーによって描画される対象になります。




// カメラの位置を設定
camera.position.z = 5;

// アニメーション制御
function animate() {
    requestAnimationFrame(animate);
    // animate() 関数が呼ばれると、次の描画フレームが必要になるたびに、再度 requestAnimationFrame(animate) が呼び出されます。このループによってアニメーションが続きます。

    // キューブの回転
    cube.rotation.x += 0.01;
    // X軸周りに 毎フレーム0.01ラジアン の回転を加えています。
    cube.rotation.y += 0.01;
    // Y軸周りに回転を加えます。


    // シーンをレンダリング
    renderer.render(scene, camera);
    // これによって、立方体やその他のオブジェクトがカメラの視点から描画され、画面に表示されます。
}
animate();
// animate(); を呼び出すことで、アニメーションの開始がトリガーされます。最初に呼び出された animate() が requestAnimationFrame(animate) を使って自分自身を繰り返し呼び出し、無限ループを形成してアニメーションを実現します。

// 最初に animate() 関数が呼ばれると、requestAnimationFrame(animate) が呼び出され、次のフレームをリクエストします。
// cube.rotation.x と cube.rotation.y の値がフレームごとに増加し、立方体が回転します。
// renderer.render(scene, camera) によって、シーンの内容（ここでは回転する立方体）が描画され、画面に表示されます。
// requestAnimationFrame によって次のフレームが要求され、同様の処理が繰り返されることでアニメーションが続きます。

