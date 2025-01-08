'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fdb54711e04f27f20e0ea64ef9cf8ae3",
".git/config": "873240304e2b029a55a0a52bc358fc60",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "208c9064a0b92e6e2dbd2e636319937e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10bcc12431142f7fb74f0a19e79a2819",
".git/logs/refs/heads/main": "3abcd54d0380044f6a3d8aa118863b97",
".git/logs/refs/remotes/origin/main": "b8e5786596e96876b6910413a6d7d127",
".git/objects/04/cc712f24b2ecf0100a4c9b415783d8f8fba087": "25020f6aa03129f489e8d41904e56d7e",
".git/objects/05/55b3a87a2e32c55b63e4650fd4bc03b19f02f8": "b60cdb986b8aca44ee087843d616636e",
".git/objects/06/f1e1737454722e96a913f58c45c92f70650cc2": "f112c52813f7da9418c8e807c3ea3fa4",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/44ec54fd576eaabf49f6e07526281dc6041abb": "0bba7e9de083cbdb15d45cd3f402254f",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/1d/b5f0fecd86ea31e5cfc95c8b455b08c215ecb0": "8f7e68e6daa14c005483c7a4ee103948",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/890922b02388222ac462679ac7a87e88f7fb90": "22a884bdd5284bfd20cf73fa649842a8",
".git/objects/29/f7e1fe4fedbfa301025902b4d859d6d67b83ec": "f2c0a23dee6926b58caa494f8daaa7fb",
".git/objects/2c/b55a452d84c922466b90021e3ae47e27203438": "84e6b5f0d20dfea8ed935e0b0f78804a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/3800ee64ccfe9e96d9752e6ae41b689f5272b0": "04846cd3d36e0e54c4c701ff3a63de9c",
".git/objects/51/31c677c95da8f7579e44d5caf07169ece0027e": "57d0e64a5c25f8e82ebd1995f12aa933",
".git/objects/5e/4fb8ead217d2af585ef2203bcd21e68cfc654d": "f8f1ceabca888e64d70fd205ab184a4e",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/60/15927796903e02e7f9fd3482997ebf03cb8835": "af2ec6ef3a20617fef42e725ba4b5941",
".git/objects/63/8a8414ec1998d09a42dced6f0d9bc819d939e0": "3e37d5afd57632e057794403bb27790b",
".git/objects/65/5c6edf54b3667652c6844eaa774645626246cd": "f51068259134eb0821c1e84c21cc4e9a",
".git/objects/6b/8f89c7772ca60311db8edde9b41d463f51423b": "fc7820d2fc241c5a411cdfa1bde51004",
".git/objects/6b/9cefa3700c3d59c84592c02edfbbfff88f82fc": "1071ae474cebaecf58e60977140f6145",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/790786d3ebf2e43b02fa6932e5a20728be32b2": "7f57ab4d4460d775e67718f8f979e85a",
".git/objects/6d/525a3e68882c8075171cc8c33025885659a8c7": "d47b218d4bfd5c4532291f269eaf305d",
".git/objects/6d/de946579c2073dc2d93592499800e1044fc355": "7bd5d0cce598f34015aace0583a83d62",
".git/objects/72/0d8207aa784f2ac8bdf645d381fb4d2dddd76d": "b3ca4e335fa89dc813475d92a81003df",
".git/objects/73/40a40aab55849fd94d6d8c4ec9ce64e0200e92": "0b436585251592ab3b7d3bbd61b0a050",
".git/objects/74/f6d18d635b32ad087a1364c43c4ae7ff666932": "f89a77126f0459d777801204d8451675",
".git/objects/7d/e1818374f4639640f36023bcb7dd616a4f70b2": "f814bb5928f91d0d57f05faa8a505a86",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/377b6317bfc2710400bfea7dce3596008a6938": "c1c13c4b4db117cc1638cdfd3f5d3c69",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/ae64c4a8381c3709a39f635ebe794d1864bee3": "cc7960fd5b87f847e04bdb662c48ab5c",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a4/d93c5b09cb76019dfa40dc82d8526e7824f9c2": "f2dacb4cb233626fafc8814fd6983c89",
".git/objects/a8/906ff8f1397f2925388ec7f9e59bda0f4bf5cf": "1b5a1151b15f0dfe2263f97459996e8d",
".git/objects/ad/620bb6b7804acfd03d03bb0b55e10b5bc0ea3d": "2d16336e5b17462365d04c3bdc70f9f4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/10d150ba19e8fc359ed1a41450c547c9afab8e": "484aa75c819dda583ffe824cc92a86c2",
".git/objects/b3/9c72092922682b2b437428ecdecac614982f29": "9da9d63fe38e98e7868259e7658d364b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/293d5c8b81de044a73eeb80e461d7df177e726": "015cfeec435cdff4a547c1416f2cee14",
".git/objects/ce/c76dbeb85d619c737f8b957aad685c7646a820": "644479bd847eb2a14e6be7d1c50e560d",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/b33624ba8d87e2bcd0adc181d6496b86feef49": "84f3357be2ea3672dc695be4db2f6e35",
".git/objects/e4/013147fb037d50beaf0ccd32bf78f7f603baa8": "45fe4e5b8e2b52dc2f9ed23cf39372e1",
".git/objects/e5/a749c2e3e8697d9184556d63868d4cc8cd4083": "e04ea76bed43da53a6bf1114f9d013e5",
".git/objects/e9/1da41ac40edbc82bd3837f9bc8109230f4b49c": "cf468364e96950bfeff964fba8d978c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/1b4b7153675263c13c6bec9120b6c148093d6e": "40bc5fecb38373110f08dea935b35956",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/41544502ce6d5b616bcf2b0f6a19bf3c3c4de2": "57f70114308767aa69d0a1fdc5b2d442",
".git/objects/f8/b4cb902813f9918b0a00f4b7516951d18c52e4": "97ec2e3585e8ce0d791519c96c0de429",
".git/objects/f9/8a2dab85c9bbec24ba3351b3def565b23bb6cb": "2ad9dc288fa3d6e4c7fb364592814b6d",
".git/objects/fd/b774320de7383414c4c39f393b611db93d58be": "445fdfe136479ca92b973efc7a00a9b7",
".git/refs/heads/main": "f71d35e8d6dafe9b6e09fa216176d8a2",
".git/refs/remotes/origin/main": "f71d35e8d6dafe9b6e09fa216176d8a2",
"assets/AssetManifest.bin": "601be971c59e1a0c656bf61357881e3f",
"assets/AssetManifest.bin.json": "d699470e98f0f41b9d248770629a9f74",
"assets/AssetManifest.json": "9a0fa54a877a4879ba7f0256b72a3fc2",
"assets/assets/fonts/Ubuntu/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/fonts/Ubuntu/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/fonts/Ubuntu/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/fonts/Ubuntu/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/images/transparent.png": "ebdeac6cb5c5e658f02a51d475177ee4",
"assets/FontManifest.json": "ffb571075068f1a686def0262f579130",
"assets/fonts/MaterialIcons-Regular.otf": "8ac2310f9109196c0649acb44428e547",
"assets/NOTICES": "574bedfe93ca3f6da581160c5673fb1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e67de42157dc71740d91bc4311a58acf",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"conf/app.conf": "27b9f8f06e2c2ba98a11a9a2b7d808b2",
"conf/nginx.conf": "6fd1f0c6d710b273aab3c81e895158ff",
"Dockerfile": "b7fc227b38276ab06ac19c1733a54fa9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "05463a651f54afc959e598b66f7b1f77",
"googleda1334fb87ba5d4d.html": "22a033276995097c2507854aa7a95004",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "298d9162cf4e0933b1fc84d399e14c79",
"/": "298d9162cf4e0933b1fc84d399e14c79",
"main.dart.js": "420c4ede300756d1185905a0428abce9",
"manifest.json": "68c257e3031f0f30cd9c04cc12aa3939",
"version.json": "f08597883af27c1ff4b6192a13ac024c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
