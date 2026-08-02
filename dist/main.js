var DW="185",D9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},E9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},EW=0,tQ=1,RW=2;var v9=1,kW=2,F7=3,O7=0,tJ=1,PJ=2,f8=0,m7=1,b8=2,eQ=3,J$=4,VW=5;var D7=100,MW=101,LW=102,BW=103,zW=104,IW=200,PW=201,AW=202,wW=203,_W=204,CW=205,TW=206,SW=207,jW=208,yW=209,vW=210,hW=211,fW=212,bW=213,xW=214,gW=0,pW=1,mW=2,Q$=3,dW=4,uW=5,lW=6,cW=7,nW=0,sW=1,iW=2,S8=0,$$=1,K$=2,W$=3,d7=4,Z$=5,X$=6,Y$=7;var E7=301,h9=302,g6=303,p6=304,u7=306,l7=1000,m6=1001,oW=1002,R9=1003,aW=1004;var c7=1005;var H8=1006,d6=1007;var f9=1008;var j8=1009,rW=1010,tW=1011,n7=1012,H$=1013,k9=1014,e8=1015,J9=1016,U$=1017,q$=1018,R7=1020,eW=35902,JZ=35899,QZ=1021,$Z=1022,x8=1023,b9=1026,x9=1027,KZ=1028,N$=1029,g9=1030,G$=1031;var F$=1033,u6=33776,l6=33777,c6=33778,n6=33779,O$=35840,D$=35841,E$=35842,R$=35843,k$=36196,V$=37492,M$=37496,L$=37488,B$=37489,s6=37490,z$=37491,I$=37808,P$=37809,A$=37810,w$=37811,_$=37812,C$=37813,T$=37814,S$=37815,j$=37816,y$=37817,v$=37818,h$=37819,f$=37820,b$=37821,x$=36492,g$=36494,p$=36495,m$=36283,d$=36284,i6=36285,u$=36286;var l$=0,WZ=1,p9="",o6="srgb",c$="srgb-linear",n$="linear",BJ="srgb";var ZZ=512,XZ=513,YZ=514,a6=515,HZ=516,UZ=517,r6=518,qZ=519;var s$="300 es",i$=2000;function nX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function sX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function p7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function NZ(){let J=p7("canvas");return J.style.display="block",J}var nK={},G7=null;function o$(...J){let Q="THREE."+J.shift();if(G7)G7("log",Q,...J);else console.log(Q,...J)}function GZ(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function u0(...J){J=GZ(J);let Q="THREE."+J.shift();if(G7)G7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function n0(...J){J=GZ(J);let Q="THREE."+J.shift();if(G7)G7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function j9(...J){let Q=J.join(" ");if(Q in nK)return;nK[Q]=!0,u0(...J)}function FZ(J,Q,$){return new Promise(function(K,W){function Z(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(Z,$);break;default:K()}}setTimeout(Z,$)})}var OZ={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class g8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let K=$[J];if(K!==void 0){let W=K.indexOf(Q);if(W!==-1)K.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let K=$.slice(0);for(let W=0,Z=K.length;W<Z;W++)K[W].call(this,J);J.target=null}}}var aJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sK=1234567,x7=Math.PI/180,y9=180/Math.PI;function k7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(aJ[J&255]+aJ[J>>8&255]+aJ[J>>16&255]+aJ[J>>24&255]+"-"+aJ[Q&255]+aJ[Q>>8&255]+"-"+aJ[Q>>16&15|64]+aJ[Q>>24&255]+"-"+aJ[$&63|128]+aJ[$>>8&255]+"-"+aJ[$>>16&255]+aJ[$>>24&255]+aJ[K&255]+aJ[K>>8&255]+aJ[K>>16&255]+aJ[K>>24&255]).toLowerCase()}function $J(J,Q,$){return Math.max(Q,Math.min($,J))}function a$(J,Q){return(J%Q+Q)%Q}function iX(J,Q,$,K,W){return K+(J-Q)*(W-K)/($-Q)}function oX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function g7(J,Q,$){return(1-$)*J+$*Q}function aX(J,Q,$,K){return g7(J,Q,1-Math.exp(-$*K))}function rX(J,Q=1){return Q-Math.abs(a$(J,Q*2)-Q)}function tX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function eX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function JY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function QY(J,Q){return J+Math.random()*(Q-J)}function $Y(J){return J*(0.5-Math.random())}function KY(J){if(J!==void 0)sK=J;let Q=sK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function WY(J){return J*x7}function ZY(J){return J*y9}function XY(J){return(J&J-1)===0&&J!==0}function YY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function HY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function UY(J,Q,$,K,W){let{cos:Z,sin:X}=Math,Y=Z($/2),H=X($/2),U=Z((Q+K)/2),G=X((Q+K)/2),O=Z((Q-K)/2),q=X((Q-K)/2),R=Z((K-Q)/2),V=X((K-Q)/2);switch(W){case"XYX":J.set(Y*G,H*O,H*q,Y*U);break;case"YZY":J.set(H*q,Y*G,H*O,Y*U);break;case"ZXZ":J.set(H*O,H*q,Y*G,Y*U);break;case"XZX":J.set(Y*G,H*V,H*R,Y*U);break;case"YXY":J.set(H*R,Y*G,H*V,Y*U);break;case"ZYZ":J.set(H*V,H*R,Y*G,Y*U);break;default:u0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function q7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Q8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var r$={DEG2RAD:x7,RAD2DEG:y9,generateUUID:k7,clamp:$J,euclideanModulo:a$,mapLinear:iX,inverseLerp:oX,lerp:g7,damp:aX,pingpong:rX,smoothstep:tX,smootherstep:eX,randInt:JY,randFloat:QY,randFloatSpread:$Y,seededRandom:KY,degToRad:WY,radToDeg:ZY,isPowerOfTwo:XY,ceilPowerOfTwo:YY,floorPowerOfTwo:HY,setQuaternionFromProperEuler:UY,normalize:Q8,denormalize:q7};class p0{static{p0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6],this.y=K[1]*Q+K[4]*$+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=$J(this.x,J.x,Q.x),this.y=$J(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=$J(this.x,J,Q),this.y=$J(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar($J($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos($J($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),K=Math.sin(Q),W=this.x-J.x,Z=this.y-J.y;return this.x=W*$-Z*K+J.x,this.y=W*K+Z*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class L8{constructor(J=0,Q=0,$=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=K}static slerpFlat(J,Q,$,K,W,Z,X){let Y=$[K+0],H=$[K+1],U=$[K+2],G=$[K+3],O=W[Z+0],q=W[Z+1],R=W[Z+2],V=W[Z+3];if(G!==V||Y!==O||H!==q||U!==R){let I=Y*O+H*q+U*R+G*V;if(I<0)O=-O,q=-q,R=-R,V=-V,I=-I;let E=1-X;if(I<0.9995){let N=Math.acos(I),S=Math.sin(N);E=Math.sin(E*N)/S,X=Math.sin(X*N)/S,Y=Y*E+O*X,H=H*E+q*X,U=U*E+R*X,G=G*E+V*X}else{Y=Y*E+O*X,H=H*E+q*X,U=U*E+R*X,G=G*E+V*X;let N=1/Math.sqrt(Y*Y+H*H+U*U+G*G);Y*=N,H*=N,U*=N,G*=N}}J[Q]=Y,J[Q+1]=H,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,K,W,Z){let X=$[K],Y=$[K+1],H=$[K+2],U=$[K+3],G=W[Z],O=W[Z+1],q=W[Z+2],R=W[Z+3];return J[Q]=X*R+U*G+Y*q-H*O,J[Q+1]=Y*R+U*O+H*G-X*q,J[Q+2]=H*R+U*q+X*O-Y*G,J[Q+3]=U*R-X*G-Y*O-H*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,K){return this._x=J,this._y=Q,this._z=$,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:K,_z:W,_order:Z}=J,X=Math.cos,Y=Math.sin,H=X($/2),U=X(K/2),G=X(W/2),O=Y($/2),q=Y(K/2),R=Y(W/2);switch(Z){case"XYZ":this._x=O*U*G+H*q*R,this._y=H*q*G-O*U*R,this._z=H*U*R+O*q*G,this._w=H*U*G-O*q*R;break;case"YXZ":this._x=O*U*G+H*q*R,this._y=H*q*G-O*U*R,this._z=H*U*R-O*q*G,this._w=H*U*G+O*q*R;break;case"ZXY":this._x=O*U*G-H*q*R,this._y=H*q*G+O*U*R,this._z=H*U*R+O*q*G,this._w=H*U*G-O*q*R;break;case"ZYX":this._x=O*U*G-H*q*R,this._y=H*q*G+O*U*R,this._z=H*U*R-O*q*G,this._w=H*U*G+O*q*R;break;case"YZX":this._x=O*U*G+H*q*R,this._y=H*q*G+O*U*R,this._z=H*U*R-O*q*G,this._w=H*U*G-O*q*R;break;case"XZY":this._x=O*U*G-H*q*R,this._y=H*q*G-O*U*R,this._z=H*U*R+O*q*G,this._w=H*U*G+O*q*R;break;default:u0("Quaternion: .setFromEuler() encountered an unknown order: "+Z)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,K=Math.sin($);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],K=Q[4],W=Q[8],Z=Q[1],X=Q[5],Y=Q[9],H=Q[2],U=Q[6],G=Q[10],O=$+X+G;if(O>0){let q=0.5/Math.sqrt(O+1);this._w=0.25/q,this._x=(U-Y)*q,this._y=(W-H)*q,this._z=(Z-K)*q}else if($>X&&$>G){let q=2*Math.sqrt(1+$-X-G);this._w=(U-Y)/q,this._x=0.25*q,this._y=(K+Z)/q,this._z=(W+H)/q}else if(X>G){let q=2*Math.sqrt(1+X-$-G);this._w=(W-H)/q,this._x=(K+Z)/q,this._y=0.25*q,this._z=(Y+U)/q}else{let q=2*Math.sqrt(1+G-$-X);this._w=(Z-K)/q,this._x=(W+H)/q,this._y=(Y+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs($J(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let K=Math.min(1,Q/$);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:K,_z:W,_w:Z}=J,X=Q._x,Y=Q._y,H=Q._z,U=Q._w;return this._x=$*U+Z*X+K*H-W*Y,this._y=K*U+Z*Y+W*X-$*H,this._z=W*U+Z*H+$*Y-K*X,this._w=Z*U-$*X-K*Y-W*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:K,_z:W,_w:Z}=J,X=this.dot(J);if(X<0)$=-$,K=-K,W=-W,Z=-Z,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+Z*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+Z*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),K=Math.sqrt(1-$),W=Math.sqrt($);return this.set(K*Math.sin(J),K*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class p{static{p.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(iK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(iK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*K,this.y=W[1]*Q+W[4]*$+W[7]*K,this.z=W[2]*Q+W[5]*$+W[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,K=this.z,W=J.elements,Z=1/(W[3]*Q+W[7]*$+W[11]*K+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*K+W[12])*Z,this.y=(W[1]*Q+W[5]*$+W[9]*K+W[13])*Z,this.z=(W[2]*Q+W[6]*$+W[10]*K+W[14])*Z,this}applyQuaternion(J){let Q=this.x,$=this.y,K=this.z,W=J.x,Z=J.y,X=J.z,Y=J.w,H=2*(Z*K-X*$),U=2*(X*Q-W*K),G=2*(W*$-Z*Q);return this.x=Q+Y*H+Z*G-X*U,this.y=$+Y*U+X*H-W*G,this.z=K+Y*G+W*U-Z*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*K,this.y=W[1]*Q+W[5]*$+W[9]*K,this.z=W[2]*Q+W[6]*$+W[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=$J(this.x,J.x,Q.x),this.y=$J(this.y,J.y,Q.y),this.z=$J(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=$J(this.x,J,Q),this.y=$J(this.y,J,Q),this.z=$J(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar($J($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:K,z:W}=J,Z=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-W*X,this.y=W*Z-$*Y,this.z=$*X-K*Z,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return CQ.copy(this).projectOnVector(J),this.sub(CQ)}reflect(J){return this.sub(CQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos($J($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,K=this.z-J.z;return Q*Q+$*$+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let K=Math.sin(Q)*J;return this.x=K*Math.sin($),this.y=Math.cos(Q)*J,this.z=K*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var CQ=new p,iK=new L8;class r0{static{r0.prototype.isMatrix3=!0}constructor(J,Q,$,K,W,Z,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,K,W,Z,X,Y,H)}set(J,Q,$,K,W,Z,X,Y,H){let U=this.elements;return U[0]=J,U[1]=K,U[2]=X,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=Z,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,K=Q.elements,W=this.elements,Z=$[0],X=$[3],Y=$[6],H=$[1],U=$[4],G=$[7],O=$[2],q=$[5],R=$[8],V=K[0],I=K[3],E=K[6],N=K[1],S=K[4],P=K[7],M=K[2],_=K[5],C=K[8];return W[0]=Z*V+X*N+Y*M,W[3]=Z*I+X*S+Y*_,W[6]=Z*E+X*P+Y*C,W[1]=H*V+U*N+G*M,W[4]=H*I+U*S+G*_,W[7]=H*E+U*P+G*C,W[2]=O*V+q*N+R*M,W[5]=O*I+q*S+R*_,W[8]=O*E+q*P+R*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return Q*Z*U-Q*X*H-$*W*U+$*X*Y+K*W*H-K*Z*Y}invert(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],G=U*Z-X*H,O=X*Y-U*W,q=H*W-Z*Y,R=Q*G+$*O+K*q;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let V=1/R;return J[0]=G*V,J[1]=(K*H-U*$)*V,J[2]=(X*$-K*Z)*V,J[3]=O*V,J[4]=(U*Q-K*Y)*V,J[5]=(K*W-X*Q)*V,J[6]=q*V,J[7]=($*Y-H*Q)*V,J[8]=(Z*Q-$*W)*V,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,K,W,Z,X){let Y=Math.cos(W),H=Math.sin(W);return this.set($*Y,$*H,-$*(Y*Z+H*X)+Z+J,-K*H,K*Y,-K*(-H*Z+Y*X)+X+Q,0,0,1),this}scale(J,Q){return j9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(TQ.makeScale(J,Q)),this}rotate(J){return j9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(TQ.makeRotation(-J)),this}translate(J,Q){return j9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(TQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let K=0;K<9;K++)if(Q[K]!==$[K])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var TQ=new r0,oK=new r0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),aK=new r0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function qY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,Z,X){if(this.enabled===!1||Z===X||!Z||!X)return W;if(this.spaces[Z].transfer==="srgb")W.r=r8(W.r),W.g=r8(W.g),W.b=r8(W.b);if(this.spaces[Z].primaries!==this.spaces[X].primaries)W.applyMatrix3(this.spaces[Z].toXYZ),W.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")W.r=N7(W.r),W.g=N7(W.g),W.b=N7(W.b);return W},workingToColorSpace:function(W,Z){return this.convert(W,this.workingColorSpace,Z)},colorSpaceToWorking:function(W,Z){return this.convert(W,Z,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,Z=this.workingColorSpace){return W.fromArray(this.spaces[Z].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,Z,X){return W.copy(this.spaces[Z].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,Z){return j9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,Z)},toWorkingColorSpace:function(W,Z){return j9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,Z)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:oK,fromXYZ:aK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:oK,fromXYZ:aK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var XJ=qY();function r8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function N7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var t9;class t${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(t9===void 0)t9=p7("canvas");t9.width=J.width,t9.height=J.height;let K=t9.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);$=t9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=p7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let K=$.getImageData(0,0,J.width,J.height),W=K.data;for(let Z=0;Z<W.length;Z++)W[Z]=r8(W[Z]/255)*255;return $.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(r8(Q[$]/255)*255);else Q[$]=r8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return u0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var NY=0;class s7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NY++}),this.uuid=k7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},K=this.data;if(K!==null){let W;if(Array.isArray(K)){W=[];for(let Z=0,X=K.length;Z<X;Z++)if(K[Z].isDataTexture)W.push(SQ(K[Z].image));else W.push(SQ(K[Z]))}else W=SQ(K);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function SQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return t$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return u0("Texture: Unable to serialize Texture."),{}}var GY=0,jQ=new p;class iJ extends g8{constructor(J=iJ.DEFAULT_IMAGE,Q=iJ.DEFAULT_MAPPING,$=1001,K=1001,W=1006,Z=1008,X=1023,Y=1009,H=iJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:GY++}),this.uuid=k7(),this.name="",this.source=new s7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=K,this.magFilter=W,this.minFilter=Z,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new p0(0,0),this.repeat=new p0(1,1),this.center=new p0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new r0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jQ).x}get height(){return this.source.getSize(jQ).y}get depth(){return this.source.getSize(jQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){u0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){u0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&$&&(K.isVector2&&$.isVector2))K.copy($);else if(K&&$&&(K.isVector3&&$.isVector3))K.copy($);else if(K&&$&&(K.isMatrix3&&$.isMatrix3))K.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}iJ.DEFAULT_IMAGE=null;iJ.DEFAULT_MAPPING=300;iJ.DEFAULT_ANISOTROPY=1;class TJ{static{TJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,K=1){this.x=J,this.y=Q,this.z=$,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,K){return this.x=J,this.y=Q,this.z=$,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,K=this.z,W=this.w,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*K+Z[12]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*K+Z[13]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*K+Z[14]*W,this.w=Z[3]*Q+Z[7]*$+Z[11]*K+Z[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,K,W,Z=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],G=Y[8],O=Y[1],q=Y[5],R=Y[9],V=Y[2],I=Y[6],E=Y[10];if(Math.abs(U-O)<0.01&&Math.abs(G-V)<0.01&&Math.abs(R-I)<0.01){if(Math.abs(U+O)<0.1&&Math.abs(G+V)<0.1&&Math.abs(R+I)<0.1&&Math.abs(H+q+E-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let S=(H+1)/2,P=(q+1)/2,M=(E+1)/2,_=(U+O)/4,C=(G+V)/4,w=(R+I)/4;if(S>P&&S>M)if(S<0.01)$=0,K=0.707106781,W=0.707106781;else $=Math.sqrt(S),K=_/$,W=C/$;else if(P>M)if(P<0.01)$=0.707106781,K=0,W=0.707106781;else K=Math.sqrt(P),$=_/K,W=w/K;else if(M<0.01)$=0.707106781,K=0.707106781,W=0;else W=Math.sqrt(M),$=C/W,K=w/W;return this.set($,K,W,Q),this}let N=Math.sqrt((I-R)*(I-R)+(G-V)*(G-V)+(O-U)*(O-U));if(Math.abs(N)<0.001)N=1;return this.x=(I-R)/N,this.y=(G-V)/N,this.z=(O-U)/N,this.w=Math.acos((H+q+E-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=$J(this.x,J.x,Q.x),this.y=$J(this.y,J.y,Q.y),this.z=$J(this.z,J.z,Q.z),this.w=$J(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=$J(this.x,J,Q),this.y=$J(this.y,J,Q),this.z=$J(this.z,J,Q),this.w=$J(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar($J($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e$ extends g8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new TJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new TJ(0,0,J,Q),this.textures=[];let K={width:J,height:Q,depth:$.depth},W=new iJ(K),Z=$.count;for(let X=0;X<Z;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let K=0,W=this.textures.length;K<W;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=$,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new s7(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class B8 extends e${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class t6 extends iJ{constructor(J=null,Q=1,$=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class JK extends iJ{constructor(J=null,Q=1,$=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wJ{static{wJ.prototype.isMatrix4=!0}constructor(J,Q,$,K,W,Z,X,Y,H,U,G,O,q,R,V,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,K,W,Z,X,Y,H,U,G,O,q,R,V,I)}set(J,Q,$,K,W,Z,X,Y,H,U,G,O,q,R,V,I){let E=this.elements;return E[0]=J,E[4]=Q,E[8]=$,E[12]=K,E[1]=W,E[5]=Z,E[9]=X,E[13]=Y,E[2]=H,E[6]=U,E[10]=G,E[14]=O,E[3]=q,E[7]=R,E[11]=V,E[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,K=1/e9.setFromMatrixColumn(J,0).length(),W=1/e9.setFromMatrixColumn(J,1).length(),Z=1/e9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*K,Q[1]=$[1]*K,Q[2]=$[2]*K,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*Z,Q[9]=$[9]*Z,Q[10]=$[10]*Z,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,K=J.y,W=J.z,Z=Math.cos($),X=Math.sin($),Y=Math.cos(K),H=Math.sin(K),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let O=Z*U,q=Z*G,R=X*U,V=X*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=H,Q[1]=q+R*H,Q[5]=O-V*H,Q[9]=-X*Y,Q[2]=V-O*H,Q[6]=R+q*H,Q[10]=Z*Y}else if(J.order==="YXZ"){let O=Y*U,q=Y*G,R=H*U,V=H*G;Q[0]=O+V*X,Q[4]=R*X-q,Q[8]=Z*H,Q[1]=Z*G,Q[5]=Z*U,Q[9]=-X,Q[2]=q*X-R,Q[6]=V+O*X,Q[10]=Z*Y}else if(J.order==="ZXY"){let O=Y*U,q=Y*G,R=H*U,V=H*G;Q[0]=O-V*X,Q[4]=-Z*G,Q[8]=R+q*X,Q[1]=q+R*X,Q[5]=Z*U,Q[9]=V-O*X,Q[2]=-Z*H,Q[6]=X,Q[10]=Z*Y}else if(J.order==="ZYX"){let O=Z*U,q=Z*G,R=X*U,V=X*G;Q[0]=Y*U,Q[4]=R*H-q,Q[8]=O*H+V,Q[1]=Y*G,Q[5]=V*H+O,Q[9]=q*H-R,Q[2]=-H,Q[6]=X*Y,Q[10]=Z*Y}else if(J.order==="YZX"){let O=Z*Y,q=Z*H,R=X*Y,V=X*H;Q[0]=Y*U,Q[4]=V-O*G,Q[8]=R*G+q,Q[1]=G,Q[5]=Z*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=q*G+R,Q[10]=O-V*G}else if(J.order==="XZY"){let O=Z*Y,q=Z*H,R=X*Y,V=X*H;Q[0]=Y*U,Q[4]=-G,Q[8]=H*U,Q[1]=O*G+V,Q[5]=Z*U,Q[9]=q*G-R,Q[2]=R*G-q,Q[6]=X*U,Q[10]=V*G+O}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(FY,J,OY)}lookAt(J,Q,$){let K=this.elements;if(G8.subVectors(J,Q),G8.lengthSq()===0)G8.z=1;if(G8.normalize(),U9.crossVectors($,G8),U9.lengthSq()===0){if(Math.abs($.z)===1)G8.x+=0.0001;else G8.z+=0.0001;G8.normalize(),U9.crossVectors($,G8)}return U9.normalize(),R6.crossVectors(G8,U9),K[0]=U9.x,K[4]=R6.x,K[8]=G8.x,K[1]=U9.y,K[5]=R6.y,K[9]=G8.y,K[2]=U9.z,K[6]=R6.z,K[10]=G8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,K=Q.elements,W=this.elements,Z=$[0],X=$[4],Y=$[8],H=$[12],U=$[1],G=$[5],O=$[9],q=$[13],R=$[2],V=$[6],I=$[10],E=$[14],N=$[3],S=$[7],P=$[11],M=$[15],_=K[0],C=K[4],w=K[8],k=K[12],z=K[1],o=K[5],j=K[9],l=K[13],e=K[2],c=K[6],r=K[10],Q0=K[14],u=K[3],y=K[7],T=K[11],f=K[15];return W[0]=Z*_+X*z+Y*e+H*u,W[4]=Z*C+X*o+Y*c+H*y,W[8]=Z*w+X*j+Y*r+H*T,W[12]=Z*k+X*l+Y*Q0+H*f,W[1]=U*_+G*z+O*e+q*u,W[5]=U*C+G*o+O*c+q*y,W[9]=U*w+G*j+O*r+q*T,W[13]=U*k+G*l+O*Q0+q*f,W[2]=R*_+V*z+I*e+E*u,W[6]=R*C+V*o+I*c+E*y,W[10]=R*w+V*j+I*r+E*T,W[14]=R*k+V*l+I*Q0+E*f,W[3]=N*_+S*z+P*e+M*u,W[7]=N*C+S*o+P*c+M*y,W[11]=N*w+S*j+P*r+M*T,W[15]=N*k+S*l+P*Q0+M*f,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],K=J[8],W=J[12],Z=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],G=J[6],O=J[10],q=J[14],R=J[3],V=J[7],I=J[11],E=J[15],N=Y*q-H*O,S=X*q-H*G,P=X*O-Y*G,M=Z*q-H*U,_=Z*O-Y*U,C=Z*G-X*U;return Q*(V*N-I*S+E*P)-$*(R*N-I*M+E*_)+K*(R*S-V*M+E*C)-W*(R*P-V*_+I*C)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],K=J[8],W=J[1],Z=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return Q*(Z*U-X*H)-$*(W*U-X*Y)+K*(W*H-Z*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],K=J[2],W=J[3],Z=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],G=J[9],O=J[10],q=J[11],R=J[12],V=J[13],I=J[14],E=J[15],N=Q*X-$*Z,S=Q*Y-K*Z,P=Q*H-W*Z,M=$*Y-K*X,_=$*H-W*X,C=K*H-W*Y,w=U*V-G*R,k=U*I-O*R,z=U*E-q*R,o=G*I-O*V,j=G*E-q*V,l=O*E-q*I,e=N*l-S*j+P*o+M*z-_*k+C*w;if(e===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let c=1/e;return J[0]=(X*l-Y*j+H*o)*c,J[1]=(K*j-$*l-W*o)*c,J[2]=(V*C-I*_+E*M)*c,J[3]=(O*_-G*C-q*M)*c,J[4]=(Y*z-Z*l-H*k)*c,J[5]=(Q*l-K*z+W*k)*c,J[6]=(I*P-R*C-E*S)*c,J[7]=(U*C-O*P+q*S)*c,J[8]=(Z*j-X*z+H*w)*c,J[9]=($*z-Q*j-W*w)*c,J[10]=(R*_-V*P+E*N)*c,J[11]=(G*P-U*_-q*N)*c,J[12]=(X*k-Z*o-Y*w)*c,J[13]=(Q*o-$*k+K*w)*c,J[14]=(V*S-R*M-I*N)*c,J[15]=(U*M-G*S+O*N)*c,this}scale(J){let Q=this.elements,$=J.x,K=J.y,W=J.z;return Q[0]*=$,Q[4]*=K,Q[8]*=W,Q[1]*=$,Q[5]*=K,Q[9]*=W,Q[2]*=$,Q[6]*=K,Q[10]*=W,Q[3]*=$,Q[7]*=K,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,K))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),K=Math.sin(Q),W=1-$,Z=J.x,X=J.y,Y=J.z,H=W*Z,U=W*X;return this.set(H*Z+$,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,U*X+$,U*Y-K*Z,0,H*Y-K*X,U*Y+K*Z,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,K,W,Z){return this.set(1,$,W,0,J,1,Z,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,$){let K=this.elements,W=Q._x,Z=Q._y,X=Q._z,Y=Q._w,H=W+W,U=Z+Z,G=X+X,O=W*H,q=W*U,R=W*G,V=Z*U,I=Z*G,E=X*G,N=Y*H,S=Y*U,P=Y*G,M=$.x,_=$.y,C=$.z;return K[0]=(1-(V+E))*M,K[1]=(q+P)*M,K[2]=(R-S)*M,K[3]=0,K[4]=(q-P)*_,K[5]=(1-(O+E))*_,K[6]=(I+N)*_,K[7]=0,K[8]=(R+S)*C,K[9]=(I-N)*C,K[10]=(1-(O+V))*C,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,$){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let Z=e9.set(K[0],K[1],K[2]).length(),X=e9.set(K[4],K[5],K[6]).length(),Y=e9.set(K[8],K[9],K[10]).length();if(W<0)Z=-Z;w8.copy(this);let H=1/Z,U=1/X,G=1/Y;return w8.elements[0]*=H,w8.elements[1]*=H,w8.elements[2]*=H,w8.elements[4]*=U,w8.elements[5]*=U,w8.elements[6]*=U,w8.elements[8]*=G,w8.elements[9]*=G,w8.elements[10]*=G,Q.setFromRotationMatrix(w8),$.x=Z,$.y=X,$.z=Y,this}makePerspective(J,Q,$,K,W,Z,X=2000,Y=!1){let H=this.elements,U=2*W/(Q-J),G=2*W/($-K),O=(Q+J)/(Q-J),q=($+K)/($-K),R,V;if(Y)R=W/(Z-W),V=Z*W/(Z-W);else if(X===2000)R=-(Z+W)/(Z-W),V=-2*Z*W/(Z-W);else if(X===2001)R=-Z/(Z-W),V=-Z*W/(Z-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=O,H[12]=0,H[1]=0,H[5]=G,H[9]=q,H[13]=0,H[2]=0,H[6]=0,H[10]=R,H[14]=V,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,K,W,Z,X=2000,Y=!1){let H=this.elements,U=2/(Q-J),G=2/($-K),O=-(Q+J)/(Q-J),q=-($+K)/($-K),R,V;if(Y)R=1/(Z-W),V=Z/(Z-W);else if(X===2000)R=-2/(Z-W),V=-(Z+W)/(Z-W);else if(X===2001)R=-1/(Z-W),V=-W/(Z-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=O,H[1]=0,H[5]=G,H[9]=0,H[13]=q,H[2]=0,H[6]=0,H[10]=R,H[14]=V,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let K=0;K<16;K++)if(Q[K]!==$[K])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var e9=new p,w8=new wJ,FY=new p(0,0,0),OY=new p(1,1,1),U9=new p,R6=new p,G8=new p,rK=new wJ,tK=new L8;class t8{constructor(J=0,Q=0,$=0,K=t8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,K=this._order){return this._x=J,this._y=Q,this._z=$,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let K=J.elements,W=K[0],Z=K[4],X=K[8],Y=K[1],H=K[5],U=K[9],G=K[2],O=K[6],q=K[10];switch(Q){case"XYZ":if(this._y=Math.asin($J(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-Z,W);else this._x=Math.atan2(O,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-$J(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin($J(O,-1,1)),Math.abs(O)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-Z,H);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-$J(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(O,q),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-Z,H);break;case"YZX":if(this._z=Math.asin($J(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-$J(Z,-1,1)),Math.abs(Z)<0.9999999)this._x=Math.atan2(O,H),this._y=Math.atan2(X,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:u0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return rK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(rK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return tK.setFromEuler(this),this.setFromQuaternion(tK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}t8.DEFAULT_ORDER="XYZ";class e6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var DY=0,eK=new p,J7=new L8,n8=new wJ,k6=new p,v7=new p,EY=new p,RY=new L8,JW=new p(1,0,0),QW=new p(0,1,0),$W=new p(0,0,1),KW={type:"added"},kY={type:"removed"},Q7={type:"childadded",child:null},yQ={type:"childremoved",child:null};class xJ extends g8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:DY++}),this.uuid=k7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xJ.DEFAULT_UP.clone();let J=new p,Q=new t8,$=new L8,K=new p(1,1,1);function W(){$.setFromEuler(Q,!1)}function Z(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(Z),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new wJ},normalMatrix:{value:new r0}}),this.matrix=new wJ,this.matrixWorld=new wJ,this.matrixAutoUpdate=xJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return J7.setFromAxisAngle(J,Q),this.quaternion.multiply(J7),this}rotateOnWorldAxis(J,Q){return J7.setFromAxisAngle(J,Q),this.quaternion.premultiply(J7),this}rotateX(J){return this.rotateOnAxis(JW,J)}rotateY(J){return this.rotateOnAxis(QW,J)}rotateZ(J){return this.rotateOnAxis($W,J)}translateOnAxis(J,Q){return eK.copy(J).applyQuaternion(this.quaternion),this.position.add(eK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(JW,J)}translateY(J){return this.translateOnAxis(QW,J)}translateZ(J){return this.translateOnAxis($W,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(n8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)k6.copy(J);else k6.set(J,Q,$);let K=this.parent;if(this.updateWorldMatrix(!0,!1),v7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)n8.lookAt(v7,k6,this.up);else n8.lookAt(k6,v7,this.up);if(this.quaternion.setFromRotationMatrix(n8),K)n8.extractRotation(K.matrixWorld),J7.setFromRotationMatrix(n8),this.quaternion.premultiply(J7.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return n0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(KW),Q7.child=J,this.dispatchEvent(Q7),Q7.child=null;else n0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(kY),yQ.child=J,this.dispatchEvent(yQ),yQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),n8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),n8.multiply(J.parent.matrixWorld);return J.applyMatrix4(n8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(KW),Q7.child=J,this.dispatchEvent(Q7),Q7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,K=this.children.length;$<K;$++){let Z=this.children[$].getObjectByProperty(J,Q);if(Z!==void 0)return Z}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let K=this.children;for(let W=0,Z=K.length;W<Z;W++)K[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(v7,J,EY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(v7,RY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:K}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*K,W[13]+=$-W[1]*Q-W[5]*$-W[9]*K,W[14]+=K-W[2]*Q-W[6]*$-W[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,K=Q.length;$<K;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let Z=0,X=W.length;Z<X;Z++)W[Z].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,this.name!=="")K.name=this.name;if(this.castShadow===!0)K.castShadow=!0;if(this.receiveShadow===!0)K.receiveShadow=!0;if(this.visible===!1)K.visible=!1;if(this.frustumCulled===!1)K.frustumCulled=!1;if(this.renderOrder!==0)K.renderOrder=this.renderOrder;if(this.static!==!1)K.static=this.static;if(Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)K.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function W(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=W(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let G=Y[H];W(J.shapes,G)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(W(J.materials,this.material[Y]));K.material=X}else K.material=W(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push(W(J.animations,Y))}}if(Q){let X=Z(J.geometries),Y=Z(J.materials),H=Z(J.textures),U=Z(J.images),G=Z(J.shapes),O=Z(J.skeletons),q=Z(J.animations),R=Z(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(O.length>0)$.skeletons=O;if(q.length>0)$.animations=q;if(R.length>0)$.nodes=R}return $.object=K,$;function Z(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let K=J.children[$];this.add(K.clone())}return this}}xJ.DEFAULT_UP=new p(0,1,0);xJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;xJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bJ extends xJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var VY={type:"move"};class i7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new bJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new bJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new p,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new p;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new bJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new p,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new p,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let K=null,W=null,Z=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){Z=!0;for(let V of J.hand.values()){let I=Q.getJointPose(V,$),E=this._getHandJoint(H,V);if(I!==null)E.matrix.fromArray(I.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=I.radius;E.visible=I!==null}let U=H.joints["index-finger-tip"],G=H.joints["thumb-tip"],O=U.position.distanceTo(G.position),q=0.02,R=0.005;if(H.inputState.pinching&&O>q+R)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&O<=q-R)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,$),K===null&&W!==null)K=W;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(VY)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=W!==null;if(H!==null)H.visible=Z!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new bJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var DZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},q9={h:0,s:0,l:0},V6={h:0,s:0,l:0};function vQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class t0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,XJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,K=XJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,XJ.colorSpaceToWorking(this,K),this}setHSL(J,Q,$,K=XJ.workingColorSpace){if(J=a$(J,1),Q=$J(Q,0,1),$=$J($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,Z=2*$-W;this.r=vQ(Z,W,J+0.3333333333333333),this.g=vQ(Z,W,J),this.b=vQ(Z,W,J-0.3333333333333333)}return XJ.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)u0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,Z=K[1],X=K[2];switch(Z){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:u0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=K[1],Z=W.length;if(Z===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(Z===6)return this.setHex(parseInt(W,16),Q);else u0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=DZ[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else u0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=r8(J.r),this.g=r8(J.g),this.b=r8(J.b),this}copyLinearToSRGB(J){return this.r=N7(J.r),this.g=N7(J.g),this.b=N7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return XJ.workingToColorSpace(rJ.copy(this),J),Math.round($J(rJ.r*255,0,255))*65536+Math.round($J(rJ.g*255,0,255))*256+Math.round($J(rJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=XJ.workingColorSpace){XJ.workingToColorSpace(rJ.copy(this),Q);let{r:$,g:K,b:W}=rJ,Z=Math.max($,K,W),X=Math.min($,K,W),Y,H,U=(X+Z)/2;if(X===Z)Y=0,H=0;else{let G=Z-X;switch(H=U<=0.5?G/(Z+X):G/(2-Z-X),Z){case $:Y=(K-W)/G+(K<W?6:0);break;case K:Y=(W-$)/G+2;break;case W:Y=($-K)/G+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,Q=XJ.workingColorSpace){return XJ.workingToColorSpace(rJ.copy(this),Q),J.r=rJ.r,J.g=rJ.g,J.b=rJ.b,J}getStyle(J="srgb"){XJ.workingToColorSpace(rJ.copy(this),J);let{r:Q,g:$,b:K}=rJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(K*255)})`}offsetHSL(J,Q,$){return this.getHSL(q9),this.setHSL(q9.h+J,q9.s+Q,q9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(q9),J.getHSL(V6);let $=g7(q9.h,V6.h,Q),K=g7(q9.s,V6.s,Q),W=g7(q9.l,V6.l,Q);return this.setHSL($,K,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,K=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*K,this.g=W[1]*Q+W[4]*$+W[7]*K,this.b=W[2]*Q+W[5]*$+W[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var rJ=new t0;t0.NAMES=DZ;class o7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new t0(J),this.density=Q}clone(){return new o7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class JQ extends xJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new t8,this.environmentIntensity=1,this.environmentRotation=new t8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var _8=new p,s8=new p,hQ=new p,i8=new p,$7=new p,K7=new p,WW=new p,fQ=new p,bQ=new p,xQ=new p,gQ=new TJ,pQ=new TJ,mQ=new TJ;class M8{constructor(J=new p,Q=new p,$=new p){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,K){K.subVectors($,Q),_8.subVectors(J,Q),K.cross(_8);let W=K.lengthSq();if(W>0)return K.multiplyScalar(1/Math.sqrt(W));return K.set(0,0,0)}static getBarycoord(J,Q,$,K,W){_8.subVectors(K,Q),s8.subVectors($,Q),hQ.subVectors(J,Q);let Z=_8.dot(_8),X=_8.dot(s8),Y=_8.dot(hQ),H=s8.dot(s8),U=s8.dot(hQ),G=Z*H-X*X;if(G===0)return W.set(0,0,0),null;let O=1/G,q=(H*Y-X*U)*O,R=(Z*U-X*Y)*O;return W.set(1-q-R,R,q)}static containsPoint(J,Q,$,K){if(this.getBarycoord(J,Q,$,K,i8)===null)return!1;return i8.x>=0&&i8.y>=0&&i8.x+i8.y<=1}static getInterpolation(J,Q,$,K,W,Z,X,Y){if(this.getBarycoord(J,Q,$,K,i8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,i8.x),Y.addScaledVector(Z,i8.y),Y.addScaledVector(X,i8.z),Y}static getInterpolatedAttribute(J,Q,$,K,W,Z){return gQ.setScalar(0),pQ.setScalar(0),mQ.setScalar(0),gQ.fromBufferAttribute(J,Q),pQ.fromBufferAttribute(J,$),mQ.fromBufferAttribute(J,K),Z.setScalar(0),Z.addScaledVector(gQ,W.x),Z.addScaledVector(pQ,W.y),Z.addScaledVector(mQ,W.z),Z}static isFrontFacing(J,Q,$,K){return _8.subVectors($,Q),s8.subVectors(J,Q),_8.cross(s8).dot(K)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,K){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,$,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return _8.subVectors(this.c,this.b),s8.subVectors(this.a,this.b),_8.cross(s8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return M8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return M8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,K,W){return M8.getInterpolation(J,this.a,this.b,this.c,Q,$,K,W)}containsPoint(J){return M8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return M8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,K=this.b,W=this.c,Z,X;$7.subVectors(K,$),K7.subVectors(W,$),fQ.subVectors(J,$);let Y=$7.dot(fQ),H=K7.dot(fQ);if(Y<=0&&H<=0)return Q.copy($);bQ.subVectors(J,K);let U=$7.dot(bQ),G=K7.dot(bQ);if(U>=0&&G<=U)return Q.copy(K);let O=Y*G-U*H;if(O<=0&&Y>=0&&U<=0)return Z=Y/(Y-U),Q.copy($).addScaledVector($7,Z);xQ.subVectors(J,W);let q=$7.dot(xQ),R=K7.dot(xQ);if(R>=0&&q<=R)return Q.copy(W);let V=q*H-Y*R;if(V<=0&&H>=0&&R<=0)return X=H/(H-R),Q.copy($).addScaledVector(K7,X);let I=U*R-q*G;if(I<=0&&G-U>=0&&q-R>=0)return WW.subVectors(W,K),X=(G-U)/(G-U+(q-R)),Q.copy(K).addScaledVector(WW,X);let E=1/(I+V+O);return Z=V*E,X=O*E,Q.copy($).addScaledVector($7,Z).addScaledVector(K7,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class m9{constructor(J=new p(1/0,1/0,1/0),Q=new p(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(C8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(C8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=C8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let Z=0,X=W.count;Z<X;Z++){if(J.isMesh===!0)J.getVertexPosition(Z,C8);else C8.fromBufferAttribute(W,Z);C8.applyMatrix4(J.matrixWorld),this.expandByPoint(C8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();M6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();M6.copy($.boundingBox)}M6.applyMatrix4(J.matrixWorld),this.union(M6)}}let K=J.children;for(let W=0,Z=K.length;W<Z;W++)this.expandByObject(K[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,C8),C8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(h7),L6.subVectors(this.max,h7),W7.subVectors(J.a,h7),Z7.subVectors(J.b,h7),X7.subVectors(J.c,h7),N9.subVectors(Z7,W7),G9.subVectors(X7,Z7),_9.subVectors(W7,X7);let Q=[0,-N9.z,N9.y,0,-G9.z,G9.y,0,-_9.z,_9.y,N9.z,0,-N9.x,G9.z,0,-G9.x,_9.z,0,-_9.x,-N9.y,N9.x,0,-G9.y,G9.x,0,-_9.y,_9.x,0];if(!dQ(Q,W7,Z7,X7,L6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!dQ(Q,W7,Z7,X7,L6))return!1;return B6.crossVectors(N9,G9),Q=[B6.x,B6.y,B6.z],dQ(Q,W7,Z7,X7,L6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,C8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(C8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return o8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),o8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),o8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),o8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),o8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),o8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),o8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),o8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(o8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var o8=[new p,new p,new p,new p,new p,new p,new p,new p],C8=new p,M6=new m9,W7=new p,Z7=new p,X7=new p,N9=new p,G9=new p,_9=new p,h7=new p,L6=new p,B6=new p,C9=new p;function dQ(J,Q,$,K,W){for(let Z=0,X=J.length-3;Z<=X;Z+=3){C9.fromArray(J,Z);let Y=W.x*Math.abs(C9.x)+W.y*Math.abs(C9.y)+W.z*Math.abs(C9.z),H=Q.dot(C9),U=$.dot(C9),G=K.dot(C9);if(Math.max(-Math.max(H,U,G),Math.min(H,U,G))>Y)return!1}return!0}var fJ=new p,z6=new p0,MY=0;class oJ extends g8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let K=0,W=this.itemSize;K<W;K++)this.array[J+K]=Q.array[$+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)z6.fromBufferAttribute(this,Q),z6.applyMatrix3(J),this.setXY(Q,z6.x,z6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)fJ.fromBufferAttribute(this,Q),fJ.applyMatrix3(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)fJ.fromBufferAttribute(this,Q),fJ.applyMatrix4(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)fJ.fromBufferAttribute(this,Q),fJ.applyNormalMatrix(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)fJ.fromBufferAttribute(this,Q),fJ.transformDirection(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=q7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=Q8($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=q7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=q7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=q7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=q7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,K){if(J*=this.itemSize,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array),K=Q8(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=K,this}setXYZW(J,Q,$,K,W){if(J*=this.itemSize,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array),K=Q8(K,this.array),W=Q8(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=K,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class QQ extends oJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class $Q extends oJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class RJ extends oJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var LY=new m9,f7=new p,uQ=new p;class V7{constructor(J=new p,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else LY.setFromPoints(J).getCenter($);let K=0;for(let W=0,Z=J.length;W<Z;W++)K=Math.max(K,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;f7.subVectors(J,this.center);let Q=f7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),K=($-this.radius)*0.5;this.center.addScaledVector(f7,K/$),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else uQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(f7.copy(J.center).add(uQ)),this.expandByPoint(f7.copy(J.center).sub(uQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var BY=0,V8=new wJ,lQ=new xJ,Y7=new p,F8=new m9,b7=new m9,cJ=new p;class hJ extends g8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BY++}),this.uuid=k7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((nX(J))?$Q:QQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new r0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return V8.makeRotationFromQuaternion(J),this.applyMatrix4(V8),this}rotateX(J){return V8.makeRotationX(J),this.applyMatrix4(V8),this}rotateY(J){return V8.makeRotationY(J),this.applyMatrix4(V8),this}rotateZ(J){return V8.makeRotationZ(J),this.applyMatrix4(V8),this}translate(J,Q,$){return V8.makeTranslation(J,Q,$),this.applyMatrix4(V8),this}scale(J,Q,$){return V8.makeScale(J,Q,$),this.applyMatrix4(V8),this}lookAt(J){return lQ.lookAt(J),lQ.updateMatrix(),this.applyMatrix4(lQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Y7).negate(),this.translate(Y7.x,Y7.y,Y7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let K=0,W=J.length;K<W;K++){let Z=J[K];$.push(Z.x,Z.y,Z.z||0)}this.setAttribute("position",new RJ($,3))}else{let $=Math.min(J.length,Q.count);for(let K=0;K<$;K++){let W=J[K];Q.setXYZ(K,W.x,W.y,W.z||0)}if(J.length>Q.count)u0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new m9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){n0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new p(-1/0,-1/0,-1/0),new p(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,K=Q.length;$<K;$++){let W=Q[$];if(F8.setFromBufferAttribute(W),this.morphTargetsRelative)cJ.addVectors(this.boundingBox.min,F8.min),this.boundingBox.expandByPoint(cJ),cJ.addVectors(this.boundingBox.max,F8.max),this.boundingBox.expandByPoint(cJ);else this.boundingBox.expandByPoint(F8.min),this.boundingBox.expandByPoint(F8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))n0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new V7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){n0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new p,1/0);return}if(J){let $=this.boundingSphere.center;if(F8.setFromBufferAttribute(J),Q)for(let W=0,Z=Q.length;W<Z;W++){let X=Q[W];if(b7.setFromBufferAttribute(X),this.morphTargetsRelative)cJ.addVectors(F8.min,b7.min),F8.expandByPoint(cJ),cJ.addVectors(F8.max,b7.max),F8.expandByPoint(cJ);else F8.expandByPoint(b7.min),F8.expandByPoint(b7.max)}F8.getCenter($);let K=0;for(let W=0,Z=J.count;W<Z;W++)cJ.fromBufferAttribute(J,W),K=Math.max(K,$.distanceToSquared(cJ));if(Q)for(let W=0,Z=Q.length;W<Z;W++){let X=Q[W],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(cJ.fromBufferAttribute(X,H),Y)Y7.fromBufferAttribute(J,H),cJ.add(Y7);K=Math.max(K,$.distanceToSquared(cJ))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))n0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){n0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:K,uv:W}=Q,Z=this.getAttribute("tangent");if(Z===void 0||Z.count!==$.count)Z=new oJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",Z);let X=[],Y=[];for(let w=0;w<$.count;w++)X[w]=new p,Y[w]=new p;let H=new p,U=new p,G=new p,O=new p0,q=new p0,R=new p0,V=new p,I=new p;function E(w,k,z){H.fromBufferAttribute($,w),U.fromBufferAttribute($,k),G.fromBufferAttribute($,z),O.fromBufferAttribute(W,w),q.fromBufferAttribute(W,k),R.fromBufferAttribute(W,z),U.sub(H),G.sub(H),q.sub(O),R.sub(O);let o=1/(q.x*R.y-R.x*q.y);if(!isFinite(o))return;V.copy(U).multiplyScalar(R.y).addScaledVector(G,-q.y).multiplyScalar(o),I.copy(G).multiplyScalar(q.x).addScaledVector(U,-R.x).multiplyScalar(o),X[w].add(V),X[k].add(V),X[z].add(V),Y[w].add(I),Y[k].add(I),Y[z].add(I)}let N=this.groups;if(N.length===0)N=[{start:0,count:J.count}];for(let w=0,k=N.length;w<k;++w){let z=N[w],o=z.start,j=z.count;for(let l=o,e=o+j;l<e;l+=3)E(J.getX(l+0),J.getX(l+1),J.getX(l+2))}let S=new p,P=new p,M=new p,_=new p;function C(w){M.fromBufferAttribute(K,w),_.copy(M);let k=X[w];S.copy(k),S.sub(M.multiplyScalar(M.dot(k))).normalize(),P.crossVectors(_,k);let o=P.dot(Y[w])<0?-1:1;Z.setXYZW(w,S.x,S.y,S.z,o)}for(let w=0,k=N.length;w<k;++w){let z=N[w],o=z.start,j=z.count;for(let l=o,e=o+j;l<e;l+=3)C(J.getX(l+0)),C(J.getX(l+1)),C(J.getX(l+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new oJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let O=0,q=$.count;O<q;O++)$.setXYZ(O,0,0,0);let K=new p,W=new p,Z=new p,X=new p,Y=new p,H=new p,U=new p,G=new p;if(J)for(let O=0,q=J.count;O<q;O+=3){let R=J.getX(O+0),V=J.getX(O+1),I=J.getX(O+2);K.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,V),Z.fromBufferAttribute(Q,I),U.subVectors(Z,W),G.subVectors(K,W),U.cross(G),X.fromBufferAttribute($,R),Y.fromBufferAttribute($,V),H.fromBufferAttribute($,I),X.add(U),Y.add(U),H.add(U),$.setXYZ(R,X.x,X.y,X.z),$.setXYZ(V,Y.x,Y.y,Y.z),$.setXYZ(I,H.x,H.y,H.z)}else for(let O=0,q=Q.count;O<q;O+=3)K.fromBufferAttribute(Q,O+0),W.fromBufferAttribute(Q,O+1),Z.fromBufferAttribute(Q,O+2),U.subVectors(Z,W),G.subVectors(K,W),U.cross(G),$.setXYZ(O+0,U.x,U.y,U.z),$.setXYZ(O+1,U.x,U.y,U.z),$.setXYZ(O+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)cJ.fromBufferAttribute(J,Q),cJ.normalize(),J.setXYZ(Q,cJ.x,cJ.y,cJ.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:G}=X,O=new H.constructor(Y.length*U),q=0,R=0;for(let V=0,I=Y.length;V<I;V++){if(X.isInterleavedBufferAttribute)q=Y[V]*X.data.stride+X.offset;else q=Y[V]*U;for(let E=0;E<U;E++)O[R++]=H[q++]}return new oJ(O,U,G)}if(this.index===null)return u0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new hJ,$=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,$);Q.setAttribute(X,H)}let W=this.morphAttributes;for(let X in W){let Y=[],H=W[X];for(let U=0,G=H.length;U<G;U++){let O=H[U],q=J(O,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;for(let X=0,Y=Z.length;X<Y;X++){let H=Z[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let H=$[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},W=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let G=0,O=H.length;G<O;G++){let q=H[G];U.push(q.toJSON(J.data))}if(U.length>0)K[Y]=U,W=!0}if(W)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;if(Z.length>0)J.data.groups=JSON.parse(JSON.stringify(Z));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let K=J.attributes;for(let H in K){let U=K[H];this.setAttribute(H,U.clone(Q))}let W=J.morphAttributes;for(let H in W){let U=[],G=W[H];for(let O=0,q=G.length;O<q;O++)U.push(G[O].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let Z=J.groups;for(let H=0,U=Z.length;H<U;H++){let G=Z[H];this.addGroup(G.start,G.count,G.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var zY=0;class V9 extends g8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:zY++}),this.uuid=k7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new t0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){u0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){u0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set($);else if(K&&K.isVector2&&($&&$.isVector2)||K&&K.isEuler&&($&&$.isEuler)||K&&K.isVector3&&($&&$.isVector3))K.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function K(W){let Z=[];for(let X in W){let Y=W[X];delete Y.metadata,Z.push(Y)}return Z}if(Q){let W=K(J.textures),Z=K(J.images);if(W.length>0)$.textures=W;if(Z.length>0)$.images=Z}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new t0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new p0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new p0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let K=Q.length;$=Array(K);for(let W=0;W!==K;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var a8=new p,cQ=new p,I6=new p,F9=new p,nQ=new p,P6=new p,sQ=new p;class M7{constructor(J=new p,Q=new p(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,a8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=a8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return a8.copy(this.origin).addScaledVector(this.direction,Q),a8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,K){cQ.copy(J).add(Q).multiplyScalar(0.5),I6.copy(Q).sub(J).normalize(),F9.copy(this.origin).sub(cQ);let W=J.distanceTo(Q)*0.5,Z=-this.direction.dot(I6),X=F9.dot(this.direction),Y=-F9.dot(I6),H=F9.lengthSq(),U=Math.abs(1-Z*Z),G,O,q,R;if(U>0)if(G=Z*Y-X,O=Z*X-Y,R=W*U,G>=0)if(O>=-R)if(O<=R){let V=1/U;G*=V,O*=V,q=G*(G+Z*O+2*X)+O*(Z*G+O+2*Y)+H}else O=W,G=Math.max(0,-(Z*O+X)),q=-G*G+O*(O+2*Y)+H;else O=-W,G=Math.max(0,-(Z*O+X)),q=-G*G+O*(O+2*Y)+H;else if(O<=-R)G=Math.max(0,-(-Z*W+X)),O=G>0?-W:Math.min(Math.max(-W,-Y),W),q=-G*G+O*(O+2*Y)+H;else if(O<=R)G=0,O=Math.min(Math.max(-W,-Y),W),q=O*(O+2*Y)+H;else G=Math.max(0,-(Z*W+X)),O=G>0?W:Math.min(Math.max(-W,-Y),W),q=-G*G+O*(O+2*Y)+H;else O=Z>0?-W:W,G=Math.max(0,-(Z*O+X)),q=-G*G+O*(O+2*Y)+H;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(K)K.copy(cQ).addScaledVector(I6,O);return q}intersectSphere(J,Q){a8.subVectors(J.center,this.origin);let $=a8.dot(this.direction),K=a8.dot(a8)-$*$,W=J.radius*J.radius;if(K>W)return null;let Z=Math.sqrt(W-K),X=$-Z,Y=$+Z;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,K,W,Z,X,Y,H=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,O=this.origin;if(H>=0)$=(J.min.x-O.x)*H,K=(J.max.x-O.x)*H;else $=(J.max.x-O.x)*H,K=(J.min.x-O.x)*H;if(U>=0)W=(J.min.y-O.y)*U,Z=(J.max.y-O.y)*U;else W=(J.max.y-O.y)*U,Z=(J.min.y-O.y)*U;if($>Z||W>K)return null;if(W>$||isNaN($))$=W;if(Z<K||isNaN(K))K=Z;if(G>=0)X=(J.min.z-O.z)*G,Y=(J.max.z-O.z)*G;else X=(J.max.z-O.z)*G,Y=(J.min.z-O.z)*G;if($>Y||X>K)return null;if(X>$||$!==$)$=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at($>=0?$:K,Q)}intersectsBox(J){return this.intersectBox(J,a8)!==null}intersectTriangle(J,Q,$,K,W){nQ.subVectors(Q,J),P6.subVectors($,J),sQ.crossVectors(nQ,P6);let Z=this.direction.dot(sQ),X;if(Z>0){if(K)return null;X=1}else if(Z<0)X=-1,Z=-Z;else return null;F9.subVectors(this.origin,J);let Y=X*this.direction.dot(P6.crossVectors(F9,P6));if(Y<0)return null;let H=X*this.direction.dot(nQ.cross(F9));if(H<0)return null;if(Y+H>Z)return null;let U=-X*F9.dot(sQ);if(U<0)return null;return this.at(U/Z,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _J extends V9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new t0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new t8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var ZW=new wJ,T9=new M7,A6=new V7,XW=new p,w6=new p,_6=new p,C6=new p,iQ=new p,T6=new p,YW=new p,S6=new p;class K0 extends xJ{constructor(J=new hJ,Q=new _J){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let K=Q[$[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Z=K.length;W<Z;W++){let X=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition(J,Q){let $=this.geometry,K=$.attributes.position,W=$.morphAttributes.position,Z=$.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if(W&&X){T6.set(0,0,0);for(let Y=0,H=W.length;Y<H;Y++){let U=X[Y],G=W[Y];if(U===0)continue;if(iQ.fromBufferAttribute(G,J),Z)T6.addScaledVector(iQ,U);else T6.addScaledVector(iQ.sub(Q),U)}Q.add(T6)}return Q}raycast(J,Q){let $=this.geometry,K=this.material,W=this.matrixWorld;if(K===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(A6.copy($.boundingSphere),A6.applyMatrix4(W),T9.copy(J.ray).recast(J.near),A6.containsPoint(T9.origin)===!1){if(T9.intersectSphere(A6,XW)===null)return;if(T9.origin.distanceToSquared(XW)>(J.far-J.near)**2)return}if(ZW.copy(W).invert(),T9.copy(J.ray).applyMatrix4(ZW),$.boundingBox!==null){if(T9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,T9)}_computeIntersections(J,Q,$){let K,W=this.geometry,Z=this.material,X=W.index,Y=W.attributes.position,H=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,O=W.groups,q=W.drawRange;if(X!==null)if(Array.isArray(Z))for(let R=0,V=O.length;R<V;R++){let I=O[R],E=Z[I.materialIndex],N=Math.max(I.start,q.start),S=Math.min(X.count,Math.min(I.start+I.count,q.start+q.count));for(let P=N,M=S;P<M;P+=3){let _=X.getX(P),C=X.getX(P+1),w=X.getX(P+2);if(K=j6(this,E,J,$,H,U,G,_,C,w),K)K.faceIndex=Math.floor(P/3),K.face.materialIndex=I.materialIndex,Q.push(K)}}else{let R=Math.max(0,q.start),V=Math.min(X.count,q.start+q.count);for(let I=R,E=V;I<E;I+=3){let N=X.getX(I),S=X.getX(I+1),P=X.getX(I+2);if(K=j6(this,Z,J,$,H,U,G,N,S,P),K)K.faceIndex=Math.floor(I/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(Z))for(let R=0,V=O.length;R<V;R++){let I=O[R],E=Z[I.materialIndex],N=Math.max(I.start,q.start),S=Math.min(Y.count,Math.min(I.start+I.count,q.start+q.count));for(let P=N,M=S;P<M;P+=3){let _=P,C=P+1,w=P+2;if(K=j6(this,E,J,$,H,U,G,_,C,w),K)K.faceIndex=Math.floor(P/3),K.face.materialIndex=I.materialIndex,Q.push(K)}}else{let R=Math.max(0,q.start),V=Math.min(Y.count,q.start+q.count);for(let I=R,E=V;I<E;I+=3){let N=I,S=I+1,P=I+2;if(K=j6(this,Z,J,$,H,U,G,N,S,P),K)K.faceIndex=Math.floor(I/3),Q.push(K)}}}}function IY(J,Q,$,K,W,Z,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,Z,W,!0,Y);else H=K.intersectTriangle(W,Z,X,Q.side===0,Y);if(H===null)return null;S6.copy(Y),S6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(S6);if(U<$.near||U>$.far)return null;return{distance:U,point:S6.clone(),object:J}}function j6(J,Q,$,K,W,Z,X,Y,H,U){J.getVertexPosition(Y,w6),J.getVertexPosition(H,_6),J.getVertexPosition(U,C6);let G=IY(J,Q,$,K,w6,_6,C6,YW);if(G){let O=new p;if(M8.getBarycoord(YW,w6,_6,C6,O),W)G.uv=M8.getInterpolatedAttribute(W,Y,H,U,O,new p0);if(Z)G.uv1=M8.getInterpolatedAttribute(Z,Y,H,U,O,new p0);if(X){if(G.normal=M8.getInterpolatedAttribute(X,Y,H,U,O,new p),G.normal.dot(K.direction)>0)G.normal.multiplyScalar(-1)}let q={a:Y,b:H,c:U,normal:new p,materialIndex:0};M8.getNormal(w6,_6,C6,q.normal),G.face=q,G.barycoord=O}return G}class QK extends iJ{constructor(J=null,Q=1,$=1,K,W,Z,X,Y,H=1003,U=1003,G,O){super(null,Z,X,Y,H,U,K,W,G,O);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var oQ=new p,PY=new p,AY=new r0;class T8{constructor(J=new p(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,K){return this.normal.set(J,Q,$),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let K=oQ.subVectors($,Q).cross(PY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let K=J.delta(oQ),W=this.normal.dot(K);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let Z=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(Z<0||Z>1))return null;return Q.copy(J.start).addScaledVector(K,Z)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||AY.getNormalMatrix(J),K=this.coplanarPoint(oQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-K.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var S9=new V7,wY=new p0(0.5,0.5),y6=new p;class a7{constructor(J=new T8,Q=new T8,$=new T8,K=new T8,W=new T8,Z=new T8){this.planes=[J,Q,$,K,W,Z]}set(J,Q,$,K,W,Z){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(K),X[4].copy(W),X[5].copy(Z),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let K=this.planes,W=J.elements,Z=W[0],X=W[1],Y=W[2],H=W[3],U=W[4],G=W[5],O=W[6],q=W[7],R=W[8],V=W[9],I=W[10],E=W[11],N=W[12],S=W[13],P=W[14],M=W[15];if(K[0].setComponents(H-Z,q-U,E-R,M-N).normalize(),K[1].setComponents(H+Z,q+U,E+R,M+N).normalize(),K[2].setComponents(H+X,q+G,E+V,M+S).normalize(),K[3].setComponents(H-X,q-G,E-V,M-S).normalize(),$)K[4].setComponents(Y,O,I,P).normalize(),K[5].setComponents(H-Y,q-O,E-I,M-P).normalize();else if(K[4].setComponents(H-Y,q-O,E-I,M-P).normalize(),Q===2000)K[5].setComponents(H+Y,q+O,E+I,M+P).normalize();else if(Q===2001)K[5].setComponents(Y,O,I,P).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();S9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();S9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(S9)}intersectsSprite(J){S9.center.set(0,0,0);let Q=wY.distanceTo(J.center);return S9.radius=0.7071067811865476+Q,S9.applyMatrix4(J.matrixWorld),this.intersectsSphere(S9)}intersectsSphere(J){let Q=this.planes,$=J.center,K=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let K=Q[$];if(y6.x=K.normal.x>0?J.max.x:J.min.x,y6.y=K.normal.y>0?J.max.y:J.min.y,y6.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(y6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class d9 extends V9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new t0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var HW=new wJ,rQ=new M7,v6=new V7,h6=new p;class L7 extends xJ{constructor(J=new hJ,Q=new d9){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,K=this.matrixWorld,W=J.params.Points.threshold,Z=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(v6.copy($.boundingSphere),v6.applyMatrix4(K),v6.radius+=W,J.ray.intersectsSphere(v6)===!1)return;HW.copy(K).invert(),rQ.copy(J.ray).applyMatrix4(HW);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,H=$.index,G=$.attributes.position;if(H!==null){let O=Math.max(0,Z.start),q=Math.min(H.count,Z.start+Z.count);for(let R=O,V=q;R<V;R++){let I=H.getX(R);h6.fromBufferAttribute(G,I),UW(h6,I,Y,K,J,Q,this)}}else{let O=Math.max(0,Z.start),q=Math.min(G.count,Z.start+Z.count);for(let R=O,V=q;R<V;R++)h6.fromBufferAttribute(G,R),UW(h6,R,Y,K,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let K=Q[$[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Z=K.length;W<Z;W++){let X=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function UW(J,Q,$,K,W,Z,X){let Y=rQ.distanceSqToPoint(J);if(Y<$){let H=new p;rQ.closestPointToPoint(J,H),H.applyMatrix4(K);let U=W.ray.origin.distanceTo(H);if(U<W.near||U>W.far)return;Z.push({distance:U,distanceToRay:Math.sqrt(Y),point:H,index:Q,face:null,faceIndex:null,barycoord:null,object:X})}}class KQ extends iJ{constructor(J=[],Q=301,$,K,W,Z,X,Y,H,U){super(J,Q,$,K,W,Z,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class WQ extends iJ{constructor(J,Q,$,K,W,Z,X,Y,H){super(J,Q,$,K,W,Z,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class M9 extends iJ{constructor(J,Q,$=1014,K,W,Z,X=1003,Y=1003,H,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let O={width:J,height:Q,depth:G};super(O,K,W,Z,X,Y,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new s7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class $K extends M9{constructor(J,Q=1014,$=301,K,W,Z=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,K,W,Z,X,Y,H);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class ZQ extends iJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class D0 extends hJ{constructor(J=1,Q=1,$=1,K=1,W=1,Z=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:K,heightSegments:W,depthSegments:Z};let X=this;K=Math.floor(K),W=Math.floor(W),Z=Math.floor(Z);let Y=[],H=[],U=[],G=[],O=0,q=0;R("z","y","x",-1,-1,$,Q,J,Z,W,0),R("z","y","x",1,-1,$,Q,-J,Z,W,1),R("x","z","y",1,1,J,$,Q,K,Z,2),R("x","z","y",1,-1,J,$,-Q,K,Z,3),R("x","y","z",1,-1,J,Q,$,K,W,4),R("x","y","z",-1,-1,J,Q,-$,K,W,5),this.setIndex(Y),this.setAttribute("position",new RJ(H,3)),this.setAttribute("normal",new RJ(U,3)),this.setAttribute("uv",new RJ(G,2));function R(V,I,E,N,S,P,M,_,C,w,k){let z=P/C,o=M/w,j=P/2,l=M/2,e=_/2,c=C+1,r=w+1,Q0=0,u=0,y=new p;for(let T=0;T<r;T++){let f=T*o-l;for(let v=0;v<c;v++){let d=v*z-j;y[V]=d*N,y[I]=f*S,y[E]=e,H.push(y.x,y.y,y.z),y[V]=0,y[I]=0,y[E]=_>0?1:-1,U.push(y.x,y.y,y.z),G.push(v/C),G.push(1-T/w),Q0+=1}}for(let T=0;T<w;T++)for(let f=0;f<C;f++){let v=O+f+c*T,d=O+f+c*(T+1),J0=O+(f+1)+c*(T+1),i=O+(f+1)+c*T;Y.push(v,d,i),Y.push(d,J0,i),u+=6}X.addGroup(q,u,k),q+=u,O+=Q0}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new D0(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class r7 extends hJ{constructor(J=1,Q=32,$=0,K=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:K},Q=Math.max(3,Q);let W=[],Z=[],X=[],Y=[],H=new p,U=new p0;Z.push(0,0,0),X.push(0,0,1),Y.push(0.5,0.5);for(let G=0,O=3;G<=Q;G++,O+=3){let q=$+G/Q*K;H.x=J*Math.cos(q),H.y=J*Math.sin(q),Z.push(H.x,H.y,H.z),X.push(0,0,1),U.x=(Z[O]/J+1)/2,U.y=(Z[O+1]/J+1)/2,Y.push(U.x,U.y)}for(let G=1;G<=Q;G++)W.push(G,G+1,0);this.setIndex(W),this.setAttribute("position",new RJ(Z,3)),this.setAttribute("normal",new RJ(X,3)),this.setAttribute("uv",new RJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new r7(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class pJ extends hJ{constructor(J=1,Q=1,$=1,K=32,W=1,Z=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:K,heightSegments:W,openEnded:Z,thetaStart:X,thetaLength:Y};let H=this;K=Math.floor(K),W=Math.floor(W);let U=[],G=[],O=[],q=[],R=0,V=[],I=$/2,E=0;if(N(),Z===!1){if(J>0)S(!0);if(Q>0)S(!1)}this.setIndex(U),this.setAttribute("position",new RJ(G,3)),this.setAttribute("normal",new RJ(O,3)),this.setAttribute("uv",new RJ(q,2));function N(){let P=new p,M=new p,_=0,C=(Q-J)/$;for(let w=0;w<=W;w++){let k=[],z=w/W,o=z*(Q-J)+J;for(let j=0;j<=K;j++){let l=j/K,e=l*Y+X,c=Math.sin(e),r=Math.cos(e);M.x=o*c,M.y=-z*$+I,M.z=o*r,G.push(M.x,M.y,M.z),P.set(c,C,r).normalize(),O.push(P.x,P.y,P.z),q.push(l,1-z),k.push(R++)}V.push(k)}for(let w=0;w<K;w++)for(let k=0;k<W;k++){let z=V[k][w],o=V[k+1][w],j=V[k+1][w+1],l=V[k][w+1];if(J>0||k!==0)U.push(z,o,l),_+=3;if(Q>0||k!==W-1)U.push(o,j,l),_+=3}H.addGroup(E,_,0),E+=_}function S(P){let M=R,_=new p0,C=new p,w=0,k=P===!0?J:Q,z=P===!0?1:-1;for(let j=1;j<=K;j++)G.push(0,I*z,0),O.push(0,z,0),q.push(0.5,0.5),R++;let o=R;for(let j=0;j<=K;j++){let e=j/K*Y+X,c=Math.cos(e),r=Math.sin(e);C.x=k*r,C.y=I*z,C.z=k*c,G.push(C.x,C.y,C.z),O.push(0,z,0),_.x=c*0.5+0.5,_.y=r*0.5*z+0.5,q.push(_.x,_.y),R++}for(let j=0;j<K;j++){let l=M+j,e=o+j;if(P===!0)U.push(e,e+1,l);else U.push(e+1,e,l);w+=3}H.addGroup(E,w,P===!0?1:2),E+=w}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new pJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class Q9 extends pJ{constructor(J=1,Q=1,$=32,K=1,W=!1,Z=0,X=Math.PI*2){super(0,J,Q,$,K,W,Z,X);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:K,openEnded:W,thetaStart:Z,thetaLength:X}}static fromJSON(J){return new Q9(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class XQ extends hJ{constructor(J=[],Q=[],$=1,K=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:K};let W=[],Z=[];if(X(K),H($),U(),this.setAttribute("position",new RJ(W,3)),this.setAttribute("normal",new RJ(W.slice(),3)),this.setAttribute("uv",new RJ(Z,2)),K===0)this.computeVertexNormals();else this.normalizeNormals();function X(N){let S=new p,P=new p,M=new p;for(let _=0;_<Q.length;_+=3)q(Q[_+0],S),q(Q[_+1],P),q(Q[_+2],M),Y(S,P,M,N)}function Y(N,S,P,M){let _=M+1,C=[];for(let w=0;w<=_;w++){C[w]=[];let k=N.clone().lerp(P,w/_),z=S.clone().lerp(P,w/_),o=_-w;for(let j=0;j<=o;j++)if(j===0&&w===_)C[w][j]=k;else C[w][j]=k.clone().lerp(z,j/o)}for(let w=0;w<_;w++)for(let k=0;k<2*(_-w)-1;k++){let z=Math.floor(k/2);if(k%2===0)O(C[w][z+1]),O(C[w+1][z]),O(C[w][z]);else O(C[w][z+1]),O(C[w+1][z+1]),O(C[w+1][z])}}function H(N){let S=new p;for(let P=0;P<W.length;P+=3)S.x=W[P+0],S.y=W[P+1],S.z=W[P+2],S.normalize().multiplyScalar(N),W[P+0]=S.x,W[P+1]=S.y,W[P+2]=S.z}function U(){let N=new p;for(let S=0;S<W.length;S+=3){N.x=W[S+0],N.y=W[S+1],N.z=W[S+2];let P=I(N)/2/Math.PI+0.5,M=E(N)/Math.PI+0.5;Z.push(P,1-M)}R(),G()}function G(){for(let N=0;N<Z.length;N+=6){let S=Z[N+0],P=Z[N+2],M=Z[N+4],_=Math.max(S,P,M),C=Math.min(S,P,M);if(_>0.9&&C<0.1){if(S<0.2)Z[N+0]+=1;if(P<0.2)Z[N+2]+=1;if(M<0.2)Z[N+4]+=1}}}function O(N){W.push(N.x,N.y,N.z)}function q(N,S){let P=N*3;S.x=J[P+0],S.y=J[P+1],S.z=J[P+2]}function R(){let N=new p,S=new p,P=new p,M=new p,_=new p0,C=new p0,w=new p0;for(let k=0,z=0;k<W.length;k+=9,z+=6){N.set(W[k+0],W[k+1],W[k+2]),S.set(W[k+3],W[k+4],W[k+5]),P.set(W[k+6],W[k+7],W[k+8]),_.set(Z[z+0],Z[z+1]),C.set(Z[z+2],Z[z+3]),w.set(Z[z+4],Z[z+5]),M.copy(N).add(S).add(P).divideScalar(3);let o=I(M);V(_,z+0,N,o),V(C,z+2,S,o),V(w,z+4,P,o)}}function V(N,S,P,M){if(M<0&&N.x===1)Z[S]=N.x-1;if(P.x===0&&P.z===0)Z[S]=M/2/Math.PI+0.5}function I(N){return Math.atan2(N.z,-N.x)}function E(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new XQ(J.vertices,J.indices,J.radius,J.detail)}}class B7 extends XQ{constructor(J=1,Q=0){let $=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],K=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super($,K,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new B7(J.radius,J.detail)}}class p8 extends hJ{constructor(J=1,Q=1,$=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:K};let W=J/2,Z=Q/2,X=Math.floor($),Y=Math.floor(K),H=X+1,U=Y+1,G=J/X,O=Q/Y,q=[],R=[],V=[],I=[];for(let E=0;E<U;E++){let N=E*O-Z;for(let S=0;S<H;S++){let P=S*G-W;R.push(P,-N,0),V.push(0,0,1),I.push(S/X),I.push(1-E/Y)}}for(let E=0;E<Y;E++)for(let N=0;N<X;N++){let S=N+H*E,P=N+H*(E+1),M=N+1+H*(E+1),_=N+1+H*E;q.push(S,P,_),q.push(P,M,_)}this.setIndex(q),this.setAttribute("position",new RJ(R,3)),this.setAttribute("normal",new RJ(V,3)),this.setAttribute("uv",new RJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new p8(J.width,J.height,J.widthSegments,J.heightSegments)}}class m8 extends hJ{constructor(J=0.5,Q=1,$=32,K=1,W=0,Z=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:K,thetaStart:W,thetaLength:Z},$=Math.max(3,$),K=Math.max(1,K);let X=[],Y=[],H=[],U=[],G=J,O=(Q-J)/K,q=new p,R=new p0;for(let V=0;V<=K;V++){for(let I=0;I<=$;I++){let E=W+I/$*Z;q.x=G*Math.cos(E),q.y=G*Math.sin(E),Y.push(q.x,q.y,q.z),H.push(0,0,1),R.x=(q.x/Q+1)/2,R.y=(q.y/Q+1)/2,U.push(R.x,R.y)}G+=O}for(let V=0;V<K;V++){let I=V*($+1);for(let E=0;E<$;E++){let N=E+I,S=N,P=N+$+1,M=N+$+2,_=N+1;X.push(S,P,_),X.push(P,M,_)}}this.setIndex(X),this.setAttribute("position",new RJ(Y,3)),this.setAttribute("normal",new RJ(H,3)),this.setAttribute("uv",new RJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new m8(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class z8 extends hJ{constructor(J=1,Q=32,$=16,K=0,W=Math.PI*2,Z=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:K,phiLength:W,thetaStart:Z,thetaLength:X},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(Z+X,Math.PI),H=0,U=[],G=new p,O=new p,q=[],R=[],V=[],I=[];for(let E=0;E<=$;E++){let N=[],S=E/$,P=Z+S*X,M=J*Math.cos(P),_=Math.sqrt(J*J-M*M),C=0;if(E===0&&Z===0)C=0.5/Q;else if(E===$&&Y===Math.PI)C=-0.5/Q;for(let w=0;w<=Q;w++){let k=w/Q,z=K+k*W;G.x=-_*Math.cos(z),G.y=M,G.z=_*Math.sin(z),R.push(G.x,G.y,G.z),O.copy(G).normalize(),V.push(O.x,O.y,O.z),I.push(k+C,1-S),N.push(H++)}U.push(N)}for(let E=0;E<$;E++)for(let N=0;N<Q;N++){let S=U[E][N+1],P=U[E][N],M=U[E+1][N],_=U[E+1][N+1];if(E!==0||Z>0)q.push(S,P,_);if(E!==$-1||Y<Math.PI)q.push(P,M,_)}this.setIndex(q),this.setAttribute("position",new RJ(R,3)),this.setAttribute("normal",new RJ(V,3)),this.setAttribute("uv",new RJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new z8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class u9 extends hJ{constructor(J=1,Q=0.4,$=12,K=48,W=Math.PI*2,Z=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:K,arc:W,thetaStart:Z,thetaLength:X},$=Math.floor($),K=Math.floor(K);let Y=[],H=[],U=[],G=[],O=new p,q=new p,R=new p;for(let V=0;V<=$;V++){let I=Z+V/$*X;for(let E=0;E<=K;E++){let N=E/K*W;q.x=(J+Q*Math.cos(I))*Math.cos(N),q.y=(J+Q*Math.cos(I))*Math.sin(N),q.z=Q*Math.sin(I),H.push(q.x,q.y,q.z),O.x=J*Math.cos(N),O.y=J*Math.sin(N),R.subVectors(q,O).normalize(),U.push(R.x,R.y,R.z),G.push(E/K),G.push(V/$)}}for(let V=1;V<=$;V++)for(let I=1;I<=K;I++){let E=(K+1)*V+I-1,N=(K+1)*(V-1)+I-1,S=(K+1)*(V-1)+I,P=(K+1)*V+I;Y.push(E,N,P),Y.push(N,S,P)}this.setIndex(Y),this.setAttribute("position",new RJ(H,3)),this.setAttribute("normal",new RJ(U,3)),this.setAttribute("uv",new RJ(G,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new u9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}function l9(J){let Q={};for(let $ in J){Q[$]={};for(let K in J[$]){let W=J[$][K];if(qW(W))if(W.isRenderTargetTexture)u0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][K]=null;else Q[$][K]=W.clone();else if(Array.isArray(W))if(qW(W[0])){let Z=[];for(let X=0,Y=W.length;X<Y;X++)Z[X]=W[X].clone();Q[$][K]=Z}else Q[$][K]=W.slice();else Q[$][K]=W}}return Q}function eJ(J){let Q={};for(let $=0;$<J.length;$++){let K=l9(J[$]);for(let W in K)Q[W]=K[W]}return Q}function qW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function _Y(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function KK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return XJ.workingColorSpace}var EZ={clone:l9,merge:eJ},CY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class U8 extends V9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CY,this.fragmentShader=TY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=l9(J.uniforms),this.uniformsGroups=_Y(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let Z=this.uniforms[K].value;if(Z&&Z.isTexture)Q.uniforms[K]={type:"t",value:Z.toJSON(J).uuid};else if(Z&&Z.isColor)Q.uniforms[K]={type:"c",value:Z.getHex()};else if(Z&&Z.isVector2)Q.uniforms[K]={type:"v2",value:Z.toArray()};else if(Z&&Z.isVector3)Q.uniforms[K]={type:"v3",value:Z.toArray()};else if(Z&&Z.isVector4)Q.uniforms[K]={type:"v4",value:Z.toArray()};else if(Z&&Z.isMatrix3)Q.uniforms[K]={type:"m3",value:Z.toArray()};else if(Z&&Z.isMatrix4)Q.uniforms[K]={type:"m4",value:Z.toArray()};else Q.uniforms[K]={value:Z}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let K in this.extensions)if(this.extensions[K]===!0)$[K]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let K=J.uniforms[$];switch(this.uniforms[$]={},K.type){case"t":this.uniforms[$].value=Q[K.value]||null;break;case"c":this.uniforms[$].value=new t0().setHex(K.value);break;case"v2":this.uniforms[$].value=new p0().fromArray(K.value);break;case"v3":this.uniforms[$].value=new p().fromArray(K.value);break;case"v4":this.uniforms[$].value=new TJ().fromArray(K.value);break;case"m3":this.uniforms[$].value=new r0().fromArray(K.value);break;case"m4":this.uniforms[$].value=new wJ().fromArray(K.value);break;default:this.uniforms[$].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class WK extends U8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class A0 extends V9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new t0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new t0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new p0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new t8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class t7 extends A0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new p0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $J(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new t0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new t0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new t0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class ZK extends V9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class XK extends V9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function f6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class c9{constructor(J,Q,$,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,K=Q[$],W=Q[$-1];$:{J:{let Z;Q:{K:if(!(J<K)){for(let X=$+2;;){if(K===void 0){if(J<W)break K;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(W=K,K=Q[++$],J<K)break J}Z=Q.length;break Q}if(!(J>=W)){let X=Q[1];if(J<X)$=2,W=X;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(K=W,W=Q[--$-1],J>=W)break J}Z=$,$=0;break Q}break $}while($<Z){let X=$+Z>>>1;if(J<Q[X])Z=X;else $=X+1}if(K=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,K)}return this.interpolate_($,W,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,K=this.valueSize,W=J*K;for(let Z=0;Z!==K;++Z)Q[Z]=$[W+Z];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class YK extends c9{constructor(J,Q,$,K){super(J,Q,$,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let K=this.parameterPositions,W=J-2,Z=J+1,X=K[W],Y=K[Z];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,X=2*Q-$;break;case 2402:W=K.length-2,X=Q+K[W]-K[W+1];break;default:W=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:Z=J,Y=2*$-Q;break;case 2402:Z=1,Y=$+K[1]-K[0];break;default:Z=J-1,Y=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-$),this._offsetPrev=W*U,this._offsetNext=Z*U}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,G=this._offsetNext,O=this._weightPrev,q=this._weightNext,R=($-Q)/(K-Q),V=R*R,I=V*R,E=-O*I+2*O*V-O*R,N=(1+O)*I+(-1.5-2*O)*V+(-0.5+O)*R+1,S=(-1-q)*I+(1.5+q)*V+0.5*R,P=q*I-q*V;for(let M=0;M!==X;++M)W[M]=E*Z[U+M]+N*Z[H+M]+S*Z[Y+M]+P*Z[G+M];return W}}class HK extends c9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=($-Q)/(K-Q),G=1-U;for(let O=0;O!==X;++O)W[O]=Z[H+O]*G+Z[Y+O]*U;return W}}class UK extends c9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class qK extends c9{interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,G=this.outTangents;if(!U||!G){let R=($-Q)/(K-Q),V=1-R;for(let I=0;I!==X;++I)W[I]=Z[H+I]*V+Z[Y+I]*R;return W}let O=X*2,q=J-1;for(let R=0;R!==X;++R){let V=Z[H+R],I=Z[Y+R],E=q*O+R*2,N=G[E],S=G[E+1],P=J*O+R*2,M=U[P],_=U[P+1],C=($-Q)/(K-Q),w,k,z,o,j;for(let l=0;l<8;l++){w=C*C,k=w*C,z=1-C,o=z*z,j=o*z;let c=j*Q+3*o*C*N+3*z*w*M+k*K-$;if(Math.abs(c)<0.0000000001)break;let r=3*o*(N-Q)+6*z*C*(M-N)+3*w*(K-M);if(Math.abs(r)<0.0000000001)break;C=C-c/r,C=Math.max(0,Math.min(1,C))}W[R]=j*V+3*o*C*S+3*z*w*_+k*I}return W}}class I8{constructor(J,Q,$,K){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=f6(Q,this.TimeBufferType),this.values=f6($,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:f6(J.times,Array),values:f6(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)$.interpolation=K}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new UK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new HK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new YK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new qK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return u0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,K=Q.length;$!==K;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,K=Q.length;$!==K;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,K=$.length,W=0,Z=K-1;while(W!==K&&$[W]<J)++W;while(Z!==-1&&$[Z]>Q)--Z;if(++Z,W!==0||Z!==K){if(W>=Z)Z=Math.max(Z,1),W=Z-1;let X=this.getValueSize();this.times=$.slice(W,Z),this.values=this.values.slice(W*X,Z*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)n0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,K=this.values,W=$.length;if(W===0)n0("KeyframeTrack: Track is empty.",this),J=!1;let Z=null;for(let X=0;X!==W;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){n0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(Z!==null&&Z>Y){n0("KeyframeTrack: Out of order keys.",this,X,Y,Z),J=!1;break}Z=Y}if(K!==void 0){if(sX(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){n0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),K=this.getInterpolation()===2302,W=J.length-1,Z=1;for(let X=1;X<W;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!K){let G=X*$,O=G-$,q=G+$;for(let R=0;R!==$;++R){let V=Q[G+R];if(V!==Q[O+R]||V!==Q[q+R]){Y=!0;break}}}else Y=!0;if(Y){if(X!==Z){J[Z]=J[X];let G=X*$,O=Z*$;for(let q=0;q!==$;++q)Q[O+q]=Q[G+q]}++Z}}if(W>0){J[Z]=J[W];for(let X=W*$,Y=Z*$,H=0;H!==$;++H)Q[Y+H]=Q[X+H];++Z}if(Z!==J.length)this.times=J.slice(0,Z),this.values=Q.slice(0,Z*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);return K.createInterpolant=this.createInterpolant,K}}I8.prototype.ValueTypeName="";I8.prototype.TimeBufferType=Float32Array;I8.prototype.ValueBufferType=Float32Array;I8.prototype.DefaultInterpolation=2301;class n9 extends I8{constructor(J,Q,$){super(J,Q,$)}}n9.prototype.ValueTypeName="bool";n9.prototype.ValueBufferType=Array;n9.prototype.DefaultInterpolation=2300;n9.prototype.InterpolantFactoryMethodLinear=void 0;n9.prototype.InterpolantFactoryMethodSmooth=void 0;class NK extends I8{constructor(J,Q,$,K){super(J,Q,$,K)}}NK.prototype.ValueTypeName="color";class GK extends I8{constructor(J,Q,$,K){super(J,Q,$,K)}}GK.prototype.ValueTypeName="number";class FK extends c9{constructor(J,Q,$,K){super(J,Q,$,K)}interpolate_(J,Q,$,K){let W=this.resultBuffer,Z=this.sampleValues,X=this.valueSize,Y=($-Q)/(K-Q),H=J*X;for(let U=H+X;H!==U;H+=4)L8.slerpFlat(W,0,Z,H-X,Z,H,Y);return W}}class YQ extends I8{constructor(J,Q,$,K){super(J,Q,$,K)}InterpolantFactoryMethodLinear(J){return new FK(this.times,this.values,this.getValueSize(),J)}}YQ.prototype.ValueTypeName="quaternion";YQ.prototype.InterpolantFactoryMethodSmooth=void 0;class s9 extends I8{constructor(J,Q,$){super(J,Q,$)}}s9.prototype.ValueTypeName="string";s9.prototype.ValueBufferType=Array;s9.prototype.DefaultInterpolation=2300;s9.prototype.InterpolantFactoryMethodLinear=void 0;s9.prototype.InterpolantFactoryMethodSmooth=void 0;class OK extends I8{constructor(J,Q,$,K){super(J,Q,$,K)}}OK.prototype.ValueTypeName="vector";class DK{constructor(J,Q,$){let K=this,W=!1,Z=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(X++,W===!1){if(K.onStart!==void 0)K.onStart(U,Z,X)}W=!0},this.itemEnd=function(U){if(Z++,K.onProgress!==void 0)K.onProgress(U,Z,X);if(Z===X){if(W=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(U){if(K.onError!==void 0)K.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return H.push(U,G),this},this.removeHandler=function(U){let G=H.indexOf(U);if(G!==-1)H.splice(G,2);return this},this.getHandler=function(U){for(let G=0,O=H.length;G<O;G+=2){let q=H[G],R=H[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var RZ=new DK;class EK{constructor(J){if(this.manager=J!==void 0?J:RZ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(K,W){$.load(J,K,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}EK.DEFAULT_MATERIAL_NAME="__DEFAULT";class z7 extends xJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new t0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var aQ=new wJ,NW=new p,GW=new p;class HQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new p0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new wJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new a7,this._frameExtents=new p0(1,1),this._viewportCount=1,this._viewports=[new TJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(NW.setFromMatrixPosition(J.matrixWorld),Q.position.copy(NW),GW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(GW),Q.updateMatrixWorld(),aQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(aQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var b6=new p,x6=new L8,h8=new p;class UQ extends xJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wJ,this.projectionMatrix=new wJ,this.projectionMatrixInverse=new wJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(b6,x6,h8),h8.x===1&&h8.y===1&&h8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(b6,x6,h8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(b6,x6,h8),h8.x===1&&h8.y===1&&h8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(b6,x6,h8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var O9=new p,FW=new p0,OW=new p0;class sJ extends UQ{constructor(J=50,Q=1,$=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=y9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(x7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return y9*2*Math.atan(Math.tan(x7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){O9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(O9.x,O9.y).multiplyScalar(-J/O9.z),O9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(O9.x,O9.y).multiplyScalar(-J/O9.z)}getViewSize(J,Q){return this.getViewBounds(J,FW,OW),Q.subVectors(OW,FW)}setViewOffset(J,Q,$,K,W,Z){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=K,this.view.width=W,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(x7*0.5*this.fov)/this.zoom,$=2*Q,K=this.aspect*$,W=-0.5*K,Z=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=Z;W+=Z.offsetX*K/Y,Q-=Z.offsetY*$/H,K*=Z.width/Y,$*=Z.height/H}let X=this.filmOffset;if(X!==0)W+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+K,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class kZ extends HQ{constructor(){super(new sJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=y9*2*J.angle*this.focus,K=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||K!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=K,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class L9 extends z7{constructor(J,Q,$=0,K=Math.PI/3,W=0,Z=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xJ.DEFAULT_UP),this.updateMatrix(),this.target=new xJ,this.distance=$,this.angle=K,this.penumbra=W,this.decay=Z,this.map=null,this.shadow=new kZ}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class VZ extends HQ{constructor(){super(new sJ(90,1,0.5,500));this.isPointLightShadow=!0}}class $9 extends z7{constructor(J,Q,$=0,K=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=K,this.shadow=new VZ}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class e7 extends UQ{constructor(J=-1,Q=1,$=1,K=-1,W=0.1,Z=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=K,this.near=W,this.far=Z,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,K,W,Z){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=K,this.view.width=W,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,K=(this.top+this.bottom)/2,W=$-J,Z=$+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=H*this.view.offsetX,Z=W+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic(W,Z,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class MZ extends HQ{constructor(){super(new e7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class I7 extends z7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xJ.DEFAULT_UP),this.updateMatrix(),this.target=new xJ,this.shadow=new MZ}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class qQ extends z7{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var H7=-90,U7=1;class RK extends xJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new sJ(H7,U7,J,Q);K.layers=this.layers,this.add(K);let W=new sJ(H7,U7,J,Q);W.layers=this.layers,this.add(W);let Z=new sJ(H7,U7,J,Q);Z.layers=this.layers,this.add(Z);let X=new sJ(H7,U7,J,Q);X.layers=this.layers,this.add(X);let Y=new sJ(H7,U7,J,Q);Y.layers=this.layers,this.add(Y);let H=new sJ(H7,U7,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,K,W,Z,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Z.up.set(0,0,1),Z.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Z.up.set(0,0,-1),Z.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,Z,X,Y,H,U]=this.children,G=J.getRenderTarget(),O=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let V=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,K),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,K),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,2,K),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,K),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,K),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=V,J.setRenderTarget($,5,K),I&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,O,q),J.xr.enabled=R,$.texture.needsPMREMUpdate=!0}}class kK extends sJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var VK="\\[\\]\\.:\\/",SY=new RegExp("["+VK+"]","g"),MK="[^"+VK+"]",jY="[^"+VK.replace("\\.","")+"]",yY=/((?:WC+[\/:])*)/.source.replace("WC",MK),vY=/(WCOD+)?/.source.replace("WCOD",jY),hY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",MK),fY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",MK),bY=new RegExp("^"+yY+vY+hY+fY+"$"),xY=["material","materials","bones","map"];class LZ{constructor(J,Q,$){let K=$||EJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,K=this._bindings[$];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let K=this._targetGroup.nCachedObjects_,W=$.length;K!==W;++K)$[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class EJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||EJ.parseTrackName(Q),this.node=EJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new EJ(J,Q,$);else return new EJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(SY,"")}static parseTrackName(J){let Q=bY.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=$.nodeName&&$.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let W=$.nodeName.substring(K+1);if(xY.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,K),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let Z=0;Z<W.length;Z++){let X=W[Z];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},K=$(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)J[Q++]=$[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let K=0,W=$.length;K!==W;++K)$[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,K=Q.propertyName,W=Q.propertyIndex;if(!J)J=EJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){u0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){n0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){n0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){n0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){n0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){n0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){n0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){n0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let Z=J[K];if(Z===void 0){let H=Q.nodeName;n0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){n0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){n0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=Z,this.propertyIndex=W}else if(Z.fromArray!==void 0&&Z.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=Z;else if(Array.isArray(Z))Y=this.BindingType.EntireArray,this.resolvedProperty=Z;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}EJ.Composite=LZ;EJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};EJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};EJ.prototype.GetterByBindingType=[EJ.prototype._getValue_direct,EJ.prototype._getValue_array,EJ.prototype._getValue_arrayElement,EJ.prototype._getValue_toArray];EJ.prototype.SetterByBindingTypeAndVersioning=[[EJ.prototype._setValue_direct,EJ.prototype._setValue_direct_setNeedsUpdate,EJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[EJ.prototype._setValue_array,EJ.prototype._setValue_array_setNeedsUpdate,EJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[EJ.prototype._setValue_arrayElement,EJ.prototype._setValue_arrayElement_setNeedsUpdate,EJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[EJ.prototype._setValue_fromArray,EJ.prototype._setValue_fromArray_setNeedsUpdate,EJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RG=new Float32Array(1);class J6{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=$J(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos($J(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class LK{static{LK.prototype.isMatrix2=!0}constructor(J,Q,$,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,K){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=K,this}}class NQ extends g8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(J===void 0){u0("Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function BK(J,Q,$,K){let W=gY(K);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function gY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)u0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function lZ(){let J=null,Q=!1,$=null,K=null;function W(Z,X){$(Z,X),K=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;K=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(Z){$=Z},setContext:function(Z){J=Z}}}function pY(J){let Q=new WeakMap;function $(Y,H){let{array:U,usage:G}=Y,O=U.byteLength,q=J.createBuffer();J.bindBuffer(H,q),J.bufferData(H,U,G),Y.onUploadCallback();let R;if(U instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)R=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)R=J.SHORT;else if(U instanceof Uint32Array)R=J.UNSIGNED_INT;else if(U instanceof Int32Array)R=J.INT;else if(U instanceof Int8Array)R=J.BYTE;else if(U instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:R,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:O}}function K(Y,H,U){let{array:G,updateRanges:O}=H;if(J.bindBuffer(U,Y),O.length===0)J.bufferSubData(U,0,G);else{O.sort((R,V)=>R.start-V.start);let q=0;for(let R=1;R<O.length;R++){let V=O[q],I=O[R];if(I.start<=V.start+V.count+1)V.count=Math.max(V.count,I.start+I.count-V.start);else++q,O[q]=I}O.length=q+1;for(let R=0,V=O.length;R<V;R++){let I=O[R];J.bufferSubData(U,I.start*G.BYTES_PER_ELEMENT,G,I.start,I.count)}H.clearUpdateRanges()}H.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(U.buffer,Y,H),U.version=Y.version}}return{get:W,remove:Z,update:X}}var mY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dY=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sY=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oY=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,aY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eY=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JH=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QH=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$H=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,YH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qH=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NH=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GH=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,FH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RH="gl_FragColor = linearToOutputTexel( gl_FragColor );",kH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,MH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_H=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SH=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jH=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yH=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hH=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bH=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xH=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gH=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pH=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mH=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uH=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rH=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q5=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K5=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,W5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X5=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q5=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E5=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,R5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z5=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,I5=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A5=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_5=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T5=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v5=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h5=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f5=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,b5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,m5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d5=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l5=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,r5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e5=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$U=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QJ={alphahash_fragment:mY,alphahash_pars_fragment:dY,alphamap_fragment:uY,alphamap_pars_fragment:lY,alphatest_fragment:cY,alphatest_pars_fragment:nY,aomap_fragment:sY,aomap_pars_fragment:iY,batching_pars_vertex:oY,batching_vertex:aY,begin_vertex:rY,beginnormal_vertex:tY,bsdfs:eY,iridescence_fragment:JH,bumpmap_pars_fragment:QH,clipping_planes_fragment:$H,clipping_planes_pars_fragment:KH,clipping_planes_pars_vertex:WH,clipping_planes_vertex:ZH,color_fragment:XH,color_pars_fragment:YH,color_pars_vertex:HH,color_vertex:UH,common:qH,cube_uv_reflection_fragment:NH,defaultnormal_vertex:GH,displacementmap_pars_vertex:FH,displacementmap_vertex:OH,emissivemap_fragment:DH,emissivemap_pars_fragment:EH,colorspace_fragment:RH,colorspace_pars_fragment:kH,envmap_fragment:VH,envmap_common_pars_fragment:MH,envmap_pars_fragment:LH,envmap_pars_vertex:BH,envmap_physical_pars_fragment:yH,envmap_vertex:zH,fog_vertex:IH,fog_pars_vertex:PH,fog_fragment:AH,fog_pars_fragment:wH,gradientmap_pars_fragment:_H,lightmap_pars_fragment:CH,lights_lambert_fragment:TH,lights_lambert_pars_fragment:SH,lights_pars_begin:jH,lights_toon_fragment:vH,lights_toon_pars_fragment:hH,lights_phong_fragment:fH,lights_phong_pars_fragment:bH,lights_physical_fragment:xH,lights_physical_pars_fragment:gH,lights_fragment_begin:pH,lights_fragment_maps:mH,lights_fragment_end:dH,lightprobes_pars_fragment:uH,logdepthbuf_fragment:lH,logdepthbuf_pars_fragment:cH,logdepthbuf_pars_vertex:nH,logdepthbuf_vertex:sH,map_fragment:iH,map_pars_fragment:oH,map_particle_fragment:aH,map_particle_pars_fragment:rH,metalnessmap_fragment:tH,metalnessmap_pars_fragment:eH,morphinstance_vertex:J5,morphcolor_vertex:Q5,morphnormal_vertex:$5,morphtarget_pars_vertex:K5,morphtarget_vertex:W5,normal_fragment_begin:Z5,normal_fragment_maps:X5,normal_pars_fragment:Y5,normal_pars_vertex:H5,normal_vertex:U5,normalmap_pars_fragment:q5,clearcoat_normal_fragment_begin:N5,clearcoat_normal_fragment_maps:G5,clearcoat_pars_fragment:F5,iridescence_pars_fragment:O5,opaque_fragment:D5,packing:E5,premultiplied_alpha_fragment:R5,project_vertex:k5,dithering_fragment:V5,dithering_pars_fragment:M5,roughnessmap_fragment:L5,roughnessmap_pars_fragment:B5,shadowmap_pars_fragment:z5,shadowmap_pars_vertex:I5,shadowmap_vertex:P5,shadowmask_pars_fragment:A5,skinbase_vertex:w5,skinning_pars_vertex:_5,skinning_vertex:C5,skinnormal_vertex:T5,specularmap_fragment:S5,specularmap_pars_fragment:j5,tonemapping_fragment:y5,tonemapping_pars_fragment:v5,transmission_fragment:h5,transmission_pars_fragment:f5,uv_pars_fragment:b5,uv_pars_vertex:x5,uv_vertex:g5,worldpos_vertex:p5,background_vert:m5,background_frag:d5,backgroundCube_vert:u5,backgroundCube_frag:l5,cube_vert:c5,cube_frag:n5,depth_vert:s5,depth_frag:i5,distance_vert:o5,distance_frag:a5,equirect_vert:r5,equirect_frag:t5,linedashed_vert:e5,linedashed_frag:JU,meshbasic_vert:QU,meshbasic_frag:$U,meshlambert_vert:KU,meshlambert_frag:WU,meshmatcap_vert:ZU,meshmatcap_frag:XU,meshnormal_vert:YU,meshnormal_frag:HU,meshphong_vert:UU,meshphong_frag:qU,meshphysical_vert:NU,meshphysical_frag:GU,meshtoon_vert:FU,meshtoon_frag:OU,points_vert:DU,points_frag:EU,shadow_vert:RU,shadow_frag:kU,sprite_vert:VU,sprite_frag:MU},P0={common:{diffuse:{value:new t0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new r0},alphaMap:{value:null},alphaMapTransform:{value:new r0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new r0}},envmap:{envMap:{value:null},envMapRotation:{value:new r0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new r0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new r0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new r0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new r0},normalScale:{value:new p0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new r0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new r0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new r0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new r0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new t0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new p},probesMax:{value:new p},probesResolution:{value:new p}},points:{diffuse:{value:new t0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new r0},alphaTest:{value:0},uvTransform:{value:new r0}},sprite:{diffuse:{value:new t0(16777215)},opacity:{value:1},center:{value:new p0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new r0},alphaMap:{value:null},alphaMapTransform:{value:new r0},alphaTest:{value:0}}},u8={basic:{uniforms:eJ([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.fog]),vertexShader:QJ.meshbasic_vert,fragmentShader:QJ.meshbasic_frag},lambert:{uniforms:eJ([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,P0.lights,{emissive:{value:new t0(0)},envMapIntensity:{value:1}}]),vertexShader:QJ.meshlambert_vert,fragmentShader:QJ.meshlambert_frag},phong:{uniforms:eJ([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,P0.lights,{emissive:{value:new t0(0)},specular:{value:new t0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:QJ.meshphong_vert,fragmentShader:QJ.meshphong_frag},standard:{uniforms:eJ([P0.common,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.roughnessmap,P0.metalnessmap,P0.fog,P0.lights,{emissive:{value:new t0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:QJ.meshphysical_vert,fragmentShader:QJ.meshphysical_frag},toon:{uniforms:eJ([P0.common,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.gradientmap,P0.fog,P0.lights,{emissive:{value:new t0(0)}}]),vertexShader:QJ.meshtoon_vert,fragmentShader:QJ.meshtoon_frag},matcap:{uniforms:eJ([P0.common,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,{matcap:{value:null}}]),vertexShader:QJ.meshmatcap_vert,fragmentShader:QJ.meshmatcap_frag},points:{uniforms:eJ([P0.points,P0.fog]),vertexShader:QJ.points_vert,fragmentShader:QJ.points_frag},dashed:{uniforms:eJ([P0.common,P0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:QJ.linedashed_vert,fragmentShader:QJ.linedashed_frag},depth:{uniforms:eJ([P0.common,P0.displacementmap]),vertexShader:QJ.depth_vert,fragmentShader:QJ.depth_frag},normal:{uniforms:eJ([P0.common,P0.bumpmap,P0.normalmap,P0.displacementmap,{opacity:{value:1}}]),vertexShader:QJ.meshnormal_vert,fragmentShader:QJ.meshnormal_frag},sprite:{uniforms:eJ([P0.sprite,P0.fog]),vertexShader:QJ.sprite_vert,fragmentShader:QJ.sprite_frag},background:{uniforms:{uvTransform:{value:new r0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:QJ.background_vert,fragmentShader:QJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new r0}},vertexShader:QJ.backgroundCube_vert,fragmentShader:QJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:QJ.cube_vert,fragmentShader:QJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:QJ.equirect_vert,fragmentShader:QJ.equirect_frag},distance:{uniforms:eJ([P0.common,P0.displacementmap,{referencePosition:{value:new p},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:QJ.distance_vert,fragmentShader:QJ.distance_frag},shadow:{uniforms:eJ([P0.lights,P0.fog,{color:{value:new t0(0)},opacity:{value:1}}]),vertexShader:QJ.shadow_vert,fragmentShader:QJ.shadow_frag}};u8.physical={uniforms:eJ([u8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new r0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new r0},clearcoatNormalScale:{value:new p0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new r0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new r0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new r0},sheen:{value:0},sheenColor:{value:new t0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new r0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new r0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new r0},transmissionSamplerSize:{value:new p0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new r0},attenuationDistance:{value:0},attenuationColor:{value:new t0(0)},specularColor:{value:new t0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new r0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new r0},anisotropyVector:{value:new p0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new r0}}]),vertexShader:QJ.meshphysical_vert,fragmentShader:QJ.meshphysical_frag};var GQ={r:0,b:0,g:0},LU=new wJ,cZ=new r0;cZ.set(-1,0,0,0,1,0,0,0,1);function BU(J,Q,$,K,W,Z){let X=new t0(0),Y=W===!0?0:1,H,U,G=null,O=0,q=null;function R(S){let P=S.isScene===!0?S.background:null;if(P&&P.isTexture){let M=S.backgroundBlurriness>0;P=Q.get(P,M)}return P}function V(S){let P=!1,M=R(S);if(M===null)E(X,Y);else if(M&&M.isColor)E(M,1),P=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")$.buffers.color.setClear(0,0,0,1,Z);else if(_==="alpha-blend")$.buffers.color.setClear(0,0,0,0,Z);if(J.autoClear||P)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(S,P){let M=R(P);if(M&&(M.isCubeTexture||M.mapping===u7)){if(U===void 0)U=new K0(new D0(1,1,1),new U8({name:"BackgroundCubeMaterial",uniforms:l9(u8.backgroundCube.uniforms),vertexShader:u8.backgroundCube.vertexShader,fragmentShader:u8.backgroundCube.fragmentShader,side:tJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(_,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(U);if(U.material.uniforms.envMap.value=M,U.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(LU.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(cZ);if(U.material.toneMapped=XJ.getTransfer(M.colorSpace)!==BJ,G!==M||O!==M.version||q!==J.toneMapping)U.material.needsUpdate=!0,G=M,O=M.version,q=J.toneMapping;U.layers.enableAll(),S.unshift(U,U.geometry,U.material,0,0,null)}else if(M&&M.isTexture){if(H===void 0)H=new K0(new p8(2,2),new U8({name:"BackgroundMaterial",uniforms:l9(u8.background.uniforms),vertexShader:u8.background.vertexShader,fragmentShader:u8.background.fragmentShader,side:O7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=M,H.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,H.material.toneMapped=XJ.getTransfer(M.colorSpace)!==BJ,M.matrixAutoUpdate===!0)M.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(M.matrix),G!==M||O!==M.version||q!==J.toneMapping)H.material.needsUpdate=!0,G=M,O=M.version,q=J.toneMapping;H.layers.enableAll(),S.unshift(H,H.geometry,H.material,0,0,null)}}function E(S,P){S.getRGB(GQ,KK(J)),$.buffers.color.setClear(GQ.r,GQ.g,GQ.b,P,Z)}function N(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(S,P=1){X.set(S),Y=P,E(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(S){Y=S,E(X,Y)},render:V,addToRenderList:I,dispose:N}}function zU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},W=q(null),Z=W,X=!1;function Y(j,l,e,c,r){let Q0=!1,u=O(j,c,e,l);if(Z!==u)Z=u,U(Z.object);if(Q0=R(j,c,e,r),Q0)V(j,c,e,r);if(r!==null)Q.update(r,J.ELEMENT_ARRAY_BUFFER);if(Q0||X){if(X=!1,M(j,l,e,c),r!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(r).buffer)}}function H(){return J.createVertexArray()}function U(j){return J.bindVertexArray(j)}function G(j){return J.deleteVertexArray(j)}function O(j,l,e,c){let r=c.wireframe===!0,Q0=K[l.id];if(Q0===void 0)Q0={},K[l.id]=Q0;let u=j.isInstancedMesh===!0?j.id:0,y=Q0[u];if(y===void 0)y={},Q0[u]=y;let T=y[e.id];if(T===void 0)T={},y[e.id]=T;let f=T[r];if(f===void 0)f=q(H()),T[r]=f;return f}function q(j){let l=[],e=[],c=[];for(let r=0;r<$;r++)l[r]=0,e[r]=0,c[r]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:l,enabledAttributes:e,attributeDivisors:c,object:j,attributes:{},index:null}}function R(j,l,e,c){let r=Z.attributes,Q0=l.attributes,u=0,y=e.getAttributes();for(let T in y)if(y[T].location>=0){let v=r[T],d=Q0[T];if(d===void 0){if(T==="instanceMatrix"&&j.instanceMatrix)d=j.instanceMatrix;if(T==="instanceColor"&&j.instanceColor)d=j.instanceColor}if(v===void 0)return!0;if(v.attribute!==d)return!0;if(d&&v.data!==d.data)return!0;u++}if(Z.attributesNum!==u)return!0;if(Z.index!==c)return!0;return!1}function V(j,l,e,c){let r={},Q0=l.attributes,u=0,y=e.getAttributes();for(let T in y)if(y[T].location>=0){let v=Q0[T];if(v===void 0){if(T==="instanceMatrix"&&j.instanceMatrix)v=j.instanceMatrix;if(T==="instanceColor"&&j.instanceColor)v=j.instanceColor}let d={};if(d.attribute=v,v&&v.data)d.data=v.data;r[T]=d,u++}Z.attributes=r,Z.attributesNum=u,Z.index=c}function I(){let j=Z.newAttributes;for(let l=0,e=j.length;l<e;l++)j[l]=0}function E(j){N(j,0)}function N(j,l){let{newAttributes:e,enabledAttributes:c,attributeDivisors:r}=Z;if(e[j]=1,c[j]===0)J.enableVertexAttribArray(j),c[j]=1;if(r[j]!==l)J.vertexAttribDivisor(j,l),r[j]=l}function S(){let{newAttributes:j,enabledAttributes:l}=Z;for(let e=0,c=l.length;e<c;e++)if(l[e]!==j[e])J.disableVertexAttribArray(e),l[e]=0}function P(j,l,e,c,r,Q0,u){if(u===!0)J.vertexAttribIPointer(j,l,e,r,Q0);else J.vertexAttribPointer(j,l,e,c,r,Q0)}function M(j,l,e,c){I();let r=c.attributes,Q0=e.getAttributes(),u=l.defaultAttributeValues;for(let y in Q0){let T=Q0[y];if(T.location>=0){let f=r[y];if(f===void 0){if(y==="instanceMatrix"&&j.instanceMatrix)f=j.instanceMatrix;if(y==="instanceColor"&&j.instanceColor)f=j.instanceColor}if(f!==void 0){let{normalized:v,itemSize:d}=f,J0=Q.get(f);if(J0===void 0)continue;let{buffer:i,type:B,bytesPerElement:Z0}=J0,N0=B===J.INT||B===J.UNSIGNED_INT||f.gpuType===H$;if(f.isInterleavedBufferAttribute){let F0=f.data,k0=F0.stride,l0=f.offset;if(F0.isInstancedInterleavedBuffer){for(let C0=0;C0<T.locationSize;C0++)N(T.location+C0,F0.meshPerAttribute);if(j.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=F0.meshPerAttribute*F0.count}else for(let C0=0;C0<T.locationSize;C0++)E(T.location+C0);J.bindBuffer(J.ARRAY_BUFFER,i);for(let C0=0;C0<T.locationSize;C0++)P(T.location+C0,d/T.locationSize,B,v,k0*Z0,(l0+d/T.locationSize*C0)*Z0,N0)}else{if(f.isInstancedBufferAttribute){for(let F0=0;F0<T.locationSize;F0++)N(T.location+F0,f.meshPerAttribute);if(j.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=f.meshPerAttribute*f.count}else for(let F0=0;F0<T.locationSize;F0++)E(T.location+F0);J.bindBuffer(J.ARRAY_BUFFER,i);for(let F0=0;F0<T.locationSize;F0++)P(T.location+F0,d/T.locationSize,B,v,d*Z0,d/T.locationSize*F0*Z0,N0)}}else if(u!==void 0){let v=u[y];if(v!==void 0)switch(v.length){case 2:J.vertexAttrib2fv(T.location,v);break;case 3:J.vertexAttrib3fv(T.location,v);break;case 4:J.vertexAttrib4fv(T.location,v);break;default:J.vertexAttrib1fv(T.location,v)}}}}S()}function _(){z();for(let j in K){let l=K[j];for(let e in l){let c=l[e];for(let r in c){let Q0=c[r];for(let u in Q0)G(Q0[u].object),delete Q0[u];delete c[r]}}delete K[j]}}function C(j){if(K[j.id]===void 0)return;let l=K[j.id];for(let e in l){let c=l[e];for(let r in c){let Q0=c[r];for(let u in Q0)G(Q0[u].object),delete Q0[u];delete c[r]}}delete K[j.id]}function w(j){for(let l in K){let e=K[l];for(let c in e){let r=e[c];if(r[j.id]===void 0)continue;let Q0=r[j.id];for(let u in Q0)G(Q0[u].object),delete Q0[u];delete r[j.id]}}}function k(j){for(let l in K){let e=K[l],c=j.isInstancedMesh===!0?j.id:0,r=e[c];if(r===void 0)continue;for(let Q0 in r){let u=r[Q0];for(let y in u)G(u[y].object),delete u[y];delete r[Q0]}if(delete e[c],Object.keys(e).length===0)delete K[l]}}function z(){if(o(),X=!0,Z===W)return;Z=W,U(Z.object)}function o(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:z,resetDefaultState:o,dispose:_,releaseStatesOfGeometry:C,releaseStatesOfObject:k,releaseStatesOfProgram:w,initAttributes:I,enableAttribute:E,disableUnusedAttributes:S}}function IU(J,Q,$){let K;function W(H){K=H}function Z(H,U){J.drawArrays(K,H,U),$.update(U,K,1)}function X(H,U,G){if(G===0)return;J.drawArraysInstanced(K,H,U,G),$.update(U,K,G)}function Y(H,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,U,0,G);let q=0;for(let R=0;R<G;R++)q+=U[R];$.update(q,K,1)}this.setMode=W,this.render=Z,this.renderInstances=X,this.renderMultiDraw=Y}function PU(J,Q,$,K){let W;function Z(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(w){if(w!==x8&&K.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(w){let k=w===J9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==j8&&K.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==e8&&!k)return!1;return!0}function H(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=H(U);if(G!==U)u0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let O=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)u0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),N=J.getParameter(J.MAX_VERTEX_ATTRIBS),S=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),M=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),_=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Z,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:O,reversedDepthBuffer:q,maxTextures:R,maxVertexTextures:V,maxTextureSize:I,maxCubemapSize:E,maxAttributes:N,maxVertexUniforms:S,maxVaryings:P,maxFragmentUniforms:M,maxSamples:_,samples:C}}function AU(J){let Q=this,$=null,K=0,W=!1,Z=!1,X=new T8,Y=new r0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(O,q){let R=O.length!==0||q||K!==0||W;return W=q,K=O.length,R},this.beginShadows=function(){Z=!0,G(null)},this.endShadows=function(){Z=!1},this.setGlobalState=function(O,q){$=G(O,q,0)},this.setState=function(O,q,R){let{clippingPlanes:V,clipIntersection:I,clipShadows:E}=O,N=J.get(O);if(!W||V===null||V.length===0||Z&&!E)if(Z)G(null);else U();else{let S=Z?0:K,P=S*4,M=N.clippingState||null;H.value=M,M=G(V,q,P,R);for(let _=0;_!==P;++_)M[_]=$[_];N.clippingState=M,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=S}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function G(O,q,R,V){let I=O!==null?O.length:0,E=null;if(I!==0){if(E=H.value,V!==!0||E===null){let N=R+I*4,S=q.matrixWorldInverse;if(Y.getNormalMatrix(S),E===null||E.length<N)E=new Float32Array(N);for(let P=0,M=R;P!==I;++P,M+=4)X.copy(O[P]).applyMatrix4(S,Y),X.normal.toArray(E,M),E[M+3]=X.constant}H.value=E,H.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,E}}var B9=4,BZ=[0.125,0.215,0.35,0.446,0.526,0.582],i9=20,wU=256,Q6=new e7,zZ=new t0,zK=null,IK=0,PK=0,AK=!1,_U=new p;class CK{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,K=100,W={}){let{size:Z=256,position:X=_U}=W;zK=this._renderer.getRenderTarget(),IK=this._renderer.getActiveCubeFace(),PK=this._renderer.getActiveMipmapLevel(),AK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(Z);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,K,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=AZ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=PZ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(zK,IK,PK),this._renderer.xr.enabled=AK,J.scissorTest=!1,P7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===E7||J.mapping===h9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);zK=this._renderer.getRenderTarget(),IK=this._renderer.getActiveCubeFace(),PK=this._renderer.getActiveMipmapLevel(),AK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:H8,minFilter:H8,generateMipmaps:!1,type:J9,format:x8,colorSpace:c$,depthBuffer:!1},K=IZ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=IZ(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CU(W)),this._blurMaterial=SU(W,J,Q),this._ggxMaterial=TU(W,J,Q)}return K}_compileMaterial(J){let Q=new K0(new hJ,J);this._renderer.compile(Q,Q6)}_sceneToCubeUV(J,Q,$,K,W){let Y=new sJ(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,O=G.autoClear,q=G.toneMapping;if(G.getClearColor(zZ),G.toneMapping=S8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(K),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new K0(new D0,new _J({name:"PMREM.Background",side:tJ,depthWrite:!1,depthTest:!1}));let V=this._backgroundBox,I=V.material,E=!1,N=J.background;if(N){if(N.isColor)I.color.copy(N),J.background=null,E=!0}else I.color.copy(zZ),E=!0;for(let S=0;S<6;S++){let P=S%3;if(P===0)Y.up.set(0,H[S],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[S],W.y,W.z);else if(P===1)Y.up.set(0,0,H[S]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[S],W.z);else Y.up.set(0,H[S],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[S]);let M=this._cubeSize;if(P7(K,P*M,S>2?M:0,M,M),G.setRenderTarget(K),E)G.render(V,Y);G.render(J,Y)}G.toneMapping=q,G.autoClear=O,J.background=N}_textureToCubeUV(J,Q){let $=this._renderer,K=J.mapping===E7||J.mapping===h9;if(K){if(this._cubemapMaterial===null)this._cubemapMaterial=AZ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=PZ();let W=K?this._cubemapMaterial:this._equirectMaterial,Z=this._lodMeshes[0];Z.material=W;let X=W.uniforms;X.envMap.value=J;let Y=this._cubeSize;P7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(Z,Q6)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let K=this._lodMeshes.length;for(let W=1;W<K;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let K=this._renderer,W=this._pingPongRenderTarget,Z=this._ggxMaterial,X=this._lodMeshes[$];X.material=Z;let Y=Z.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),G=Math.sqrt(H*H-U*U),O=0+H*1.25,q=G*O,{_lodMax:R}=this,V=this._sizeLods[$],I=3*V*($>R-B9?$-R+B9:0),E=4*(this._cubeSize-V);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=R-Q,P7(W,I,E,3*V,2*V),K.setRenderTarget(W),K.render(X,Q6),Y.envMap.value=W.texture,Y.roughness.value=0,Y.mipInt.value=R-$,P7(J,I,E,3*V,2*V),K.setRenderTarget(J),K.render(X,Q6)}_blur(J,Q,$,K,W){let Z=this._pingPongRenderTarget;this._halfBlur(J,Z,Q,$,K,"latitudinal",W),this._halfBlur(Z,J,$,$,K,"longitudinal",W)}_halfBlur(J,Q,$,K,W,Z,X){let Y=this._renderer,H=this._blurMaterial;if(Z!=="latitudinal"&&Z!=="longitudinal")n0("blur direction must be either latitudinal or longitudinal!");let U=3,G=this._lodMeshes[K];G.material=H;let O=H.uniforms,q=this._sizeLods[$]-1,R=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*i9-1),V=W/R,I=isFinite(W)?1+Math.floor(U*V):i9;if(I>i9)u0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${I} samples when the maximum is set to ${i9}`);let E=[],N=0;for(let C=0;C<i9;++C){let w=C/V,k=Math.exp(-w*w/2);if(E.push(k),C===0)N+=k;else if(C<I)N+=2*k}for(let C=0;C<E.length;C++)E[C]=E[C]/N;if(O.envMap.value=J.texture,O.samples.value=I,O.weights.value=E,O.latitudinal.value=Z==="latitudinal",X)O.poleAxis.value=X;let{_lodMax:S}=this;O.dTheta.value=R,O.mipInt.value=S-$;let P=this._sizeLods[K],M=3*P*(K>S-B9?K-S+B9:0),_=4*(this._cubeSize-P);P7(Q,M,_,3*P,2*P),Y.setRenderTarget(Q),Y.render(G,Q6)}}function CU(J){let Q=[],$=[],K=[],W=J,Z=J-B9+1+BZ.length;for(let X=0;X<Z;X++){let Y=Math.pow(2,W);Q.push(Y);let H=1/Y;if(X>J-B9)H=BZ[X-J+B9-1];else if(X===0)H=0;$.push(H);let U=1/(Y-2),G=-U,O=1+U,q=[G,G,O,G,O,O,G,G,O,O,G,O],R=6,V=6,I=3,E=2,N=1,S=new Float32Array(I*V*R),P=new Float32Array(E*V*R),M=new Float32Array(N*V*R);for(let C=0;C<R;C++){let w=C%3*2/3-1,k=C>2?0:-1,z=[w,k,0,w+0.6666666666666666,k,0,w+0.6666666666666666,k+1,0,w,k,0,w+0.6666666666666666,k+1,0,w,k+1,0];S.set(z,I*V*C),P.set(q,E*V*C);let o=[C,C,C,C,C,C];M.set(o,N*V*C)}let _=new hJ;if(_.setAttribute("position",new oJ(S,I)),_.setAttribute("uv",new oJ(P,E)),_.setAttribute("faceIndex",new oJ(M,N)),K.push(new K0(_,null)),W>B9)W--}return{lodMeshes:K,sizeLods:Q,sigmas:$}}function IZ(J,Q,$){let K=new B8(J,Q,$);return K.texture.mapping=u7,K.texture.name="PMREM.cubeUv",K.scissorTest=!0,K}function P7(J,Q,$,K,W){J.viewport.set(Q,$,K,W),J.scissor.set(Q,$,K,W)}function TU(J,Q,$){return new U8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wU,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:OQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:f8,depthTest:!1,depthWrite:!1})}function SU(J,Q,$){let K=new Float32Array(i9),W=new p(0,1,0);return new U8({name:"SphericalGaussianBlur",defines:{n:i9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:K},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:OQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:f8,depthTest:!1,depthWrite:!1})}function PZ(){return new U8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:OQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:f8,depthTest:!1,depthWrite:!1})}function AZ(){return new U8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:OQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:f8,depthTest:!1,depthWrite:!1})}function OQ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class jK extends B8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},K=[$,$,$,$,$,$];this.texture=new KQ(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},K=new D0(5,5,5),W=new U8({name:"CubemapFromEquirect",uniforms:l9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:tJ,blending:f8});W.uniforms.tEquirect.value=Q;let Z=new K0(K,W),X=Q.minFilter;if(Q.minFilter===f9)Q.minFilter=H8;return new RK(1,10,this).update(J,Z),Q.minFilter=X,Z.geometry.dispose(),Z.material.dispose(),this}clear(J,Q=!0,$=!0,K=!0){let W=J.getRenderTarget();for(let Z=0;Z<6;Z++)J.setRenderTarget(this,Z),J.clear(Q,$,K);J.setRenderTarget(W)}}function jU(J){let Q=new WeakMap,$=new WeakMap,K=null;function W(q,R=!1){if(q===null||q===void 0)return null;if(R)return X(q);return Z(q)}function Z(q){if(q&&q.isTexture){let R=q.mapping;if(R===g6||R===p6)if(Q.has(q)){let V=Q.get(q).texture;return Y(V,q.mapping)}else{let V=q.image;if(V&&V.height>0){let I=new jK(V.height);return I.fromEquirectangularTexture(J,q),Q.set(q,I),q.addEventListener("dispose",U),Y(I.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let R=q.mapping,V=R===g6||R===p6,I=R===E7||R===h9;if(V||I){let E=$.get(q),N=E!==void 0?E.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==N){if(K===null)K=new CK(J);return E=V?K.fromEquirectangular(q,E):K.fromCubemap(q,E),E.texture.pmremVersion=q.pmremVersion,$.set(q,E),E.texture}else if(E!==void 0)return E.texture;else{let S=q.image;if(V&&S&&S.height>0||I&&S&&H(S)){if(K===null)K=new CK(J);return E=V?K.fromEquirectangular(q):K.fromCubemap(q),E.texture.pmremVersion=q.pmremVersion,$.set(q,E),q.addEventListener("dispose",G),E.texture}else return null}}}return q}function Y(q,R){if(R===g6)q.mapping=E7;else if(R===p6)q.mapping=h9;return q}function H(q){let R=0,V=6;for(let I=0;I<V;I++)if(q[I]!==void 0)R++;return R===V}function U(q){let R=q.target;R.removeEventListener("dispose",U);let V=Q.get(R);if(V!==void 0)Q.delete(R),V.dispose()}function G(q){let R=q.target;R.removeEventListener("dispose",G);let V=$.get(R);if(V!==void 0)$.delete(R),V.dispose()}function O(){if(Q=new WeakMap,$=new WeakMap,K!==null)K.dispose(),K=null}return{get:W,dispose:O}}function yU(J){let Q={};function $(K){if(Q[K]!==void 0)return Q[K];let W=J.getExtension(K);return Q[K]=W,W}return{has:function(K){return $(K)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(K){let W=$(K);if(W===null)j9("WebGLRenderer: "+K+" extension not supported.");return W}}}function vU(J,Q,$,K){let W={},Z=new WeakMap;function X(O){let q=O.target;if(q.index!==null)Q.remove(q.index);for(let V in q.attributes)Q.remove(q.attributes[V]);q.removeEventListener("dispose",X),delete W[q.id];let R=Z.get(q);if(R)Q.remove(R),Z.delete(q);if(K.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(O,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",X),W[q.id]=!0,$.memory.geometries++,q}function H(O){let q=O.attributes;for(let R in q)Q.update(q[R],J.ARRAY_BUFFER)}function U(O){let q=[],R=O.index,V=O.attributes.position,I=0;if(V===void 0)return;if(R!==null){let S=R.array;I=R.version;for(let P=0,M=S.length;P<M;P+=3){let _=S[P+0],C=S[P+1],w=S[P+2];q.push(_,C,C,w,w,_)}}else{let S=V.array;I=V.version;for(let P=0,M=S.length/3-1;P<M;P+=3){let _=P+0,C=P+1,w=P+2;q.push(_,C,C,w,w,_)}}let E=new(V.count>=65535?$Q:QQ)(q,1);E.version=I;let N=Z.get(O);if(N)Q.remove(N);Z.set(O,E)}function G(O){let q=Z.get(O);if(q){let R=O.index;if(R!==null){if(q.version<R.version)U(O)}}else U(O);return Z.get(O)}return{get:Y,update:H,getWireframeAttribute:G}}function hU(J,Q,$){let K;function W(O){K=O}let Z,X;function Y(O){Z=O.type,X=O.bytesPerElement}function H(O,q){J.drawElements(K,q,Z,O*X),$.update(q,K,1)}function U(O,q,R){if(R===0)return;J.drawElementsInstanced(K,q,Z,O*X,R),$.update(q,K,R)}function G(O,q,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,q,0,Z,O,0,R);let I=0;for(let E=0;E<R;E++)I+=q[E];$.update(I,K,1)}this.setMode=W,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=G}function fU(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function K(Z,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(Z/3);break;case J.LINES:$.lines+=Y*(Z/2);break;case J.LINE_STRIP:$.lines+=Y*(Z-1);break;case J.LINE_LOOP:$.lines+=Y*Z;break;case J.POINTS:$.points+=Y*Z;break;default:n0("WebGLInfo: Unknown draw mode:",X);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:K}}function bU(J,Q,$){let K=new WeakMap,W=new TJ;function Z(X,Y,H){let U=X.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,O=G!==void 0?G.length:0,q=K.get(Y);if(q===void 0||q.count!==O){let z=function(){w.dispose(),K.delete(Y),Y.removeEventListener("dispose",z)};if(q!==void 0)q.texture.dispose();let R=Y.morphAttributes.position!==void 0,V=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,E=Y.morphAttributes.position||[],N=Y.morphAttributes.normal||[],S=Y.morphAttributes.color||[],P=0;if(R===!0)P=1;if(V===!0)P=2;if(I===!0)P=3;let M=Y.attributes.position.count*P,_=1;if(M>Q.maxTextureSize)_=Math.ceil(M/Q.maxTextureSize),M=Q.maxTextureSize;let C=new Float32Array(M*_*4*O),w=new t6(C,M,_,O);w.type=e8,w.needsUpdate=!0;let k=P*4;for(let o=0;o<O;o++){let j=E[o],l=N[o],e=S[o],c=M*_*4*o;for(let r=0;r<j.count;r++){let Q0=r*k;if(R===!0)W.fromBufferAttribute(j,r),C[c+Q0+0]=W.x,C[c+Q0+1]=W.y,C[c+Q0+2]=W.z,C[c+Q0+3]=0;if(V===!0)W.fromBufferAttribute(l,r),C[c+Q0+4]=W.x,C[c+Q0+5]=W.y,C[c+Q0+6]=W.z,C[c+Q0+7]=0;if(I===!0)W.fromBufferAttribute(e,r),C[c+Q0+8]=W.x,C[c+Q0+9]=W.y,C[c+Q0+10]=W.z,C[c+Q0+11]=e.itemSize===4?W.w:1}}q={count:O,texture:w,size:new p0(M,_)},K.set(Y,q),Y.addEventListener("dispose",z)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let R=0;for(let I=0;I<U.length;I++)R+=U[I];let V=Y.morphTargetsRelative?1:1-R;H.getUniforms().setValue(J,"morphTargetBaseInfluence",V),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:Z}}function xU(J,Q,$,K,W){let Z=new WeakMap;function X(U){let G=W.render.frame,O=U.geometry,q=Q.get(U,O);if(Z.get(q)!==G)Q.update(q),Z.set(q,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(Z.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);Z.set(U,G)}}if(U.isSkinnedMesh){let R=U.skeleton;if(Z.get(R)!==G)R.update(),Z.set(R,G)}return q}function Y(){Z=new WeakMap}function H(U){let G=U.target;if(G.removeEventListener("dispose",H),K.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:X,dispose:Y}}var gU={[$$]:"LINEAR_TONE_MAPPING",[K$]:"REINHARD_TONE_MAPPING",[W$]:"CINEON_TONE_MAPPING",[d7]:"ACES_FILMIC_TONE_MAPPING",[X$]:"AGX_TONE_MAPPING",[Y$]:"NEUTRAL_TONE_MAPPING",[Z$]:"CUSTOM_TONE_MAPPING"};function pU(J,Q,$,K,W,Z){let X=new B8(Q,$,{type:J,depthBuffer:W,stencilBuffer:Z,samples:K?4:0,depthTexture:W?new M9(Q,$):void 0}),Y=new B8(Q,$,{type:J9,depthBuffer:!1,stencilBuffer:!1}),H=new hJ;H.setAttribute("position",new RJ([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new RJ([0,2,0,0,2,0],2));let U=new WK({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),G=new K0(H,U),O=new e7(-1,1,1,-1,0,1),q=null,R=null,V=!1,I,E=null,N=[],S=!1;this.setSize=function(P,M){X.setSize(P,M),Y.setSize(P,M);for(let _=0;_<N.length;_++){let C=N[_];if(C.setSize)C.setSize(P,M)}},this.setEffects=function(P){N=P,S=N.length>0&&N[0].isRenderPass===!0;let{width:M,height:_}=X;for(let C=0;C<N.length;C++){let w=N[C];if(w.setSize)w.setSize(M,_)}},this.begin=function(P,M){if(V)return!1;if(P.toneMapping===S8&&N.length===0)return!1;if(E=M,M!==null){let{width:_,height:C}=M;if(X.width!==_||X.height!==C)this.setSize(_,C)}if(S===!1)P.setRenderTarget(X);return I=P.toneMapping,P.toneMapping=S8,!0},this.hasRenderPass=function(){return S},this.end=function(P,M){P.toneMapping=I,V=!0;let _=X,C=Y;for(let w=0;w<N.length;w++){let k=N[w];if(k.enabled===!1)continue;if(k.render(P,C,_,M),k.needsSwap!==!1){let z=_;_=C,C=z}}if(q!==P.outputColorSpace||R!==P.toneMapping){if(q=P.outputColorSpace,R=P.toneMapping,U.defines={},XJ.getTransfer(q)===BJ)U.defines.SRGB_TRANSFER="";let w=gU[R];if(w)U.defines[w]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=_.texture,P.setRenderTarget(E),P.render(G,O),E=null,V=!1},this.isCompositing=function(){return V},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),H.dispose(),U.dispose()}}var nZ=new iJ,TK=new M9(1,1),sZ=new t6,iZ=new JK,oZ=new KQ,wZ=[],_Z=[],CZ=new Float32Array(16),TZ=new Float32Array(9),SZ=new Float32Array(4);function A7(J,Q,$){let K=J[0];if(K<=0||K>0)return J;let W=Q*$,Z=wZ[W];if(Z===void 0)Z=new Float32Array(W),wZ[W]=Z;if(Q!==0){K.toArray(Z,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(Z,Y)}return Z}function mJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,K=J.length;$<K;$++)if(J[$]!==Q[$])return!1;return!0}function dJ(J,Q){for(let $=0,K=Q.length;$<K;$++)J[$]=Q[$]}function DQ(J,Q){let $=_Z[Q];if($===void 0)$=new Int32Array(Q),_Z[Q]=$;for(let K=0;K!==Q;++K)$[K]=J.allocateTextureUnit();return $}function mU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function dU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(mJ($,Q))return;J.uniform2fv(this.addr,Q),dJ($,Q)}}function uU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(mJ($,Q))return;J.uniform3fv(this.addr,Q),dJ($,Q)}}function lU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(mJ($,Q))return;J.uniform4fv(this.addr,Q),dJ($,Q)}}function cU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(mJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),dJ($,Q)}else{if(mJ($,K))return;SZ.set(K),J.uniformMatrix2fv(this.addr,!1,SZ),dJ($,K)}}function nU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(mJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),dJ($,Q)}else{if(mJ($,K))return;TZ.set(K),J.uniformMatrix3fv(this.addr,!1,TZ),dJ($,K)}}function sU(J,Q){let $=this.cache,K=Q.elements;if(K===void 0){if(mJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),dJ($,Q)}else{if(mJ($,K))return;CZ.set(K),J.uniformMatrix4fv(this.addr,!1,CZ),dJ($,K)}}function iU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function oU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(mJ($,Q))return;J.uniform2iv(this.addr,Q),dJ($,Q)}}function aU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(mJ($,Q))return;J.uniform3iv(this.addr,Q),dJ($,Q)}}function rU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(mJ($,Q))return;J.uniform4iv(this.addr,Q),dJ($,Q)}}function tU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function eU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(mJ($,Q))return;J.uniform2uiv(this.addr,Q),dJ($,Q)}}function Jq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(mJ($,Q))return;J.uniform3uiv(this.addr,Q),dJ($,Q)}}function Qq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(mJ($,Q))return;J.uniform4uiv(this.addr,Q),dJ($,Q)}}function $q(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;let Z;if(this.type===J.SAMPLER_2D_SHADOW)TK.compareFunction=$.isReversedDepthBuffer()?r6:a6,Z=TK;else Z=nZ;$.setTexture2D(Q||Z,W)}function Kq(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTexture3D(Q||iZ,W)}function Wq(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTextureCube(Q||oZ,W)}function Zq(J,Q,$){let K=this.cache,W=$.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;$.setTexture2DArray(Q||sZ,W)}function Xq(J){switch(J){case 5126:return mU;case 35664:return dU;case 35665:return uU;case 35666:return lU;case 35674:return cU;case 35675:return nU;case 35676:return sU;case 5124:case 35670:return iU;case 35667:case 35671:return oU;case 35668:case 35672:return aU;case 35669:case 35673:return rU;case 5125:return tU;case 36294:return eU;case 36295:return Jq;case 36296:return Qq;case 35678:case 36198:case 36298:case 36306:case 35682:return $q;case 35679:case 36299:case 36307:return Kq;case 35680:case 36300:case 36308:case 36293:return Wq;case 36289:case 36303:case 36311:case 36292:return Zq}}function Yq(J,Q){J.uniform1fv(this.addr,Q)}function Hq(J,Q){let $=A7(Q,this.size,2);J.uniform2fv(this.addr,$)}function Uq(J,Q){let $=A7(Q,this.size,3);J.uniform3fv(this.addr,$)}function qq(J,Q){let $=A7(Q,this.size,4);J.uniform4fv(this.addr,$)}function Nq(J,Q){let $=A7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function Gq(J,Q){let $=A7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function Fq(J,Q){let $=A7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function Oq(J,Q){J.uniform1iv(this.addr,Q)}function Dq(J,Q){J.uniform2iv(this.addr,Q)}function Eq(J,Q){J.uniform3iv(this.addr,Q)}function Rq(J,Q){J.uniform4iv(this.addr,Q)}function kq(J,Q){J.uniform1uiv(this.addr,Q)}function Vq(J,Q){J.uniform2uiv(this.addr,Q)}function Mq(J,Q){J.uniform3uiv(this.addr,Q)}function Lq(J,Q){J.uniform4uiv(this.addr,Q)}function Bq(J,Q,$){let K=this.cache,W=Q.length,Z=DQ($,W);if(!mJ(K,Z))J.uniform1iv(this.addr,Z),dJ(K,Z);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=TK;else X=nZ;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||X,Z[Y])}function zq(J,Q,$){let K=this.cache,W=Q.length,Z=DQ($,W);if(!mJ(K,Z))J.uniform1iv(this.addr,Z),dJ(K,Z);for(let X=0;X!==W;++X)$.setTexture3D(Q[X]||iZ,Z[X])}function Iq(J,Q,$){let K=this.cache,W=Q.length,Z=DQ($,W);if(!mJ(K,Z))J.uniform1iv(this.addr,Z),dJ(K,Z);for(let X=0;X!==W;++X)$.setTextureCube(Q[X]||oZ,Z[X])}function Pq(J,Q,$){let K=this.cache,W=Q.length,Z=DQ($,W);if(!mJ(K,Z))J.uniform1iv(this.addr,Z),dJ(K,Z);for(let X=0;X!==W;++X)$.setTexture2DArray(Q[X]||sZ,Z[X])}function Aq(J){switch(J){case 5126:return Yq;case 35664:return Hq;case 35665:return Uq;case 35666:return qq;case 35674:return Nq;case 35675:return Gq;case 35676:return Fq;case 5124:case 35670:return Oq;case 35667:case 35671:return Dq;case 35668:case 35672:return Eq;case 35669:case 35673:return Rq;case 5125:return kq;case 36294:return Vq;case 36295:return Mq;case 36296:return Lq;case 35678:case 36198:case 36298:case 36306:case 35682:return Bq;case 35679:case 36299:case 36307:return zq;case 35680:case 36300:case 36308:case 36293:return Iq;case 36289:case 36303:case 36311:case 36292:return Pq}}class aZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=Xq(Q.type)}}class rZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=Aq(Q.type)}}class tZ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let K=this.seq;for(let W=0,Z=K.length;W!==Z;++W){let X=K[W];X.setValue(J,Q[X.id],$)}}}var wK=/(\w+)(\])?(\[|\.)?/g;function jZ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function wq(J,Q,$){let K=J.name,W=K.length;wK.lastIndex=0;while(!0){let Z=wK.exec(K),X=wK.lastIndex,Y=Z[1],H=Z[2]==="]",U=Z[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===W){jZ($,U===void 0?new aZ(Y,J,Q):new rZ(Y,J,Q));break}else{let O=$.map[Y];if(O===void 0)O=new tZ(Y),jZ($,O);$=O}}}class W6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let X=J.getActiveUniform(Q,Z),Y=J.getUniformLocation(Q,X.name);wq(X,Y,this)}let K=[],W=[];for(let Z of this.seq)if(Z.type===J.SAMPLER_2D_SHADOW||Z.type===J.SAMPLER_CUBE_SHADOW||Z.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(Z);else W.push(Z);if(K.length>0)this.seq=K.concat(W)}setValue(J,Q,$,K){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,K)}setOptional(J,Q,$){let K=Q[$];if(K!==void 0)this.setValue(J,$,K)}static upload(J,Q,$,K){for(let W=0,Z=Q.length;W!==Z;++W){let X=Q[W],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let $=[];for(let K=0,W=J.length;K!==W;++K){let Z=J[K];if(Z.id in Q)$.push(Z)}return $}}function yZ(J,Q,$){let K=J.createShader(Q);return J.shaderSource(K,$),J.compileShader(K),K}var _q=37297,Cq=0;function Tq(J,Q){let $=J.split(`
`),K=[],W=Math.max(Q-6,0),Z=Math.min(Q+6,$.length);for(let X=W;X<Z;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return K.join(`
`)}var vZ=new r0;function Sq(J){XJ._getMatrix(vZ,XJ.workingColorSpace,J);let Q=`mat3( ${vZ.elements.map(($)=>$.toFixed(4))} )`;switch(XJ.getTransfer(J)){case n$:return[Q,"LinearTransferOETF"];case BJ:return[Q,"sRGBTransferOETF"];default:return u0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function hZ(J,Q,$){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),Z=(J.getShaderInfoLog(Q)||"").trim();if(K&&Z==="")return"";let X=/ERROR: 0:(\d+)/.exec(Z);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+Z+`

`+Tq(J.getShaderSource(Q),Y)}else return Z}function jq(J,Q){let $=Sq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var yq={[$$]:"Linear",[K$]:"Reinhard",[W$]:"Cineon",[d7]:"ACESFilmic",[X$]:"AgX",[Y$]:"Neutral",[Z$]:"Custom"};function vq(J,Q){let $=yq[Q];if($===void 0)return u0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var FQ=new p;function hq(){XJ.getLuminanceCoefficients(FQ);let J=FQ.x.toFixed(4),Q=FQ.y.toFixed(4),$=FQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function fq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(K6).join(`
`)}function bq(J){let Q=[];for(let $ in J){let K=J[$];if(K===!1)continue;Q.push("#define "+$+" "+K)}return Q.join(`
`)}function xq(J,Q){let $={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<K;W++){let Z=J.getActiveAttrib(Q,W),X=Z.name,Y=1;if(Z.type===J.FLOAT_MAT2)Y=2;if(Z.type===J.FLOAT_MAT3)Y=3;if(Z.type===J.FLOAT_MAT4)Y=4;$[X]={type:Z.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function K6(J){return J!==""}function fZ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function bZ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var gq=/^[ \t]*#include +<([\w\d./]+)>/gm;function SK(J){return J.replace(gq,mq)}var pq=new Map;function mq(J,Q){let $=QJ[Q];if($===void 0){let K=pq.get(Q);if(K!==void 0)$=QJ[K],u0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,K);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return SK($)}var dq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xZ(J){return J.replace(dq,uq)}function uq(J,Q,$,K){let W="";for(let Z=parseInt(Q);Z<parseInt($);Z++)W+=K.replace(/\[\s*i\s*\]/g,"[ "+Z+" ]").replace(/UNROLLED_LOOP_INDEX/g,Z);return W}function gZ(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var lq={[v9]:"SHADOWMAP_TYPE_PCF",[F7]:"SHADOWMAP_TYPE_VSM"};function cq(J){return lq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nq={[E7]:"ENVMAP_TYPE_CUBE",[h9]:"ENVMAP_TYPE_CUBE",[u7]:"ENVMAP_TYPE_CUBE_UV"};function sq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return nq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var iq={[h9]:"ENVMAP_MODE_REFRACTION"};function oq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return iq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aq={[nW]:"ENVMAP_BLENDING_MULTIPLY",[sW]:"ENVMAP_BLENDING_MIX",[iW]:"ENVMAP_BLENDING_ADD"};function rq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return aq[J.combine]||"ENVMAP_BLENDING_NONE"}function tq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,K=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:K,maxMip:$}}function eq(J,Q,$,K){let W=J.getContext(),Z=$.defines,X=$.vertexShader,Y=$.fragmentShader,H=cq($),U=sq($),G=oq($),O=rq($),q=tq($),R=fq($),V=bq(Z),I=W.createProgram(),E,N,S=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V].filter(K6).join(`
`),E.length>0)E+=`
`;if(N=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V].filter(K6).join(`
`),N.length>0)N+=`
`}else E=[gZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(K6).join(`
`),N=[gZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+O:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==S8?"#define TONE_MAPPING":"",$.toneMapping!==S8?QJ.tonemapping_pars_fragment:"",$.toneMapping!==S8?vq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",QJ.colorspace_pars_fragment,jq("linearToOutputTexel",$.outputColorSpace),hq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(K6).join(`
`);if(X=SK(X),X=fZ(X,$),X=bZ(X,$),Y=SK(Y),Y=fZ(Y,$),Y=bZ(Y,$),X=xZ(X),Y=xZ(Y),$.isRawShaderMaterial!==!0)S=`#version 300 es
`,E=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,N=["#define varying in",$.glslVersion===s$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===s$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N;let P=S+E+X,M=S+N+Y,_=yZ(W,W.VERTEX_SHADER,P),C=yZ(W,W.FRAGMENT_SHADER,M);if(W.attachShader(I,_),W.attachShader(I,C),$.index0AttributeName!==void 0)W.bindAttribLocation(I,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(I,0,"position");W.linkProgram(I);function w(j){if(J.debug.checkShaderErrors){let l=W.getProgramInfoLog(I)||"",e=W.getShaderInfoLog(_)||"",c=W.getShaderInfoLog(C)||"",r=l.trim(),Q0=e.trim(),u=c.trim(),y=!0,T=!0;if(W.getProgramParameter(I,W.LINK_STATUS)===!1)if(y=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,I,_,C);else{let f=hZ(W,_,"vertex"),v=hZ(W,C,"fragment");n0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(I,W.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+r+`
`+f+`
`+v)}else if(r!=="")u0("WebGLProgram: Program Info Log:",r);else if(Q0===""||u==="")T=!1;if(T)j.diagnostics={runnable:y,programLog:r,vertexShader:{log:Q0,prefix:E},fragmentShader:{log:u,prefix:N}}}W.deleteShader(_),W.deleteShader(C),k=new W6(W,I),z=xq(W,I)}let k;this.getUniforms=function(){if(k===void 0)w(this);return k};let z;this.getAttributes=function(){if(z===void 0)w(this);return z};let o=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(o===!1)o=W.getProgramParameter(I,_q);return o},this.destroy=function(){K.releaseStatesOfProgram(this),W.deleteProgram(I),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=Cq++,this.cacheKey=Q,this.usedTimes=1,this.program=I,this.vertexShader=_,this.fragmentShader=C,this}var JN=0;class eZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has($)===!1)K.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new JX(J),Q.set(J,$);return $}}class JX{constructor(J){this.id=JN++,this.code=J,this.usedTimes=0}}function QN(J){return J===g9||J===s6||J===i6}function $N(J,Q,$,K,W,Z){let X=new e6,Y=new eZ,H=new Set,U=[],G=new Map,O=K.logarithmicDepthBuffer,q=K.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function V(k){if(H.add(k),k===0)return"uv";return`uv${k}`}function I(k,z,o,j,l,e){let c=j.fog,r=l.geometry,Q0=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?j.environment:null,u=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,y=Q.get(k.envMap||Q0,u),T=!!y&&y.mapping===u7?y.image.height:null,f=R[k.type];if(k.precision!==null){if(q=K.getMaxPrecision(k.precision),q!==k.precision)u0("WebGLProgram.getParameters:",k.precision,"not supported, using",q,"instead.")}let v=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=v!==void 0?v.length:0,J0=0;if(r.morphAttributes.position!==void 0)J0=1;if(r.morphAttributes.normal!==void 0)J0=2;if(r.morphAttributes.color!==void 0)J0=3;let i,B,Z0,N0;if(f){let a0=u8[f];i=a0.vertexShader,B=a0.fragmentShader}else{i=k.vertexShader,B=k.fragmentShader;let a0=Y.getVertexShaderStage(k),AJ=Y.getFragmentShaderStage(k);Y.update(k,a0,AJ),Z0=a0.id,N0=AJ.id}let F0=J.getRenderTarget(),k0=J.state.buffers.depth.getReversed(),l0=l.isInstancedMesh===!0,C0=l.isBatchedMesh===!0,b0=!!k.map,c0=!!k.matcap,s0=!!y,x0=!!k.aoMap,UJ=!!k.lightMap,i0=!!k.bumpMap&&k.wireframe===!1,qJ=!!k.normalMap,YJ=!!k.displacementMap,GJ=!!k.emissiveMap,HJ=!!k.metalnessMap,b=!!k.roughnessMap,gJ=k.anisotropy>0,e0=k.clearcoat>0,h=k.dispersion>0,D=k.iridescence>0,F=k.sheen>0,A=k.transmission>0,x=gJ&&!!k.anisotropyMap,X0=e0&&!!k.clearcoatMap,U0=e0&&!!k.clearcoatNormalMap,R0=e0&&!!k.clearcoatRoughnessMap,t=D&&!!k.iridescenceMap,$0=D&&!!k.iridescenceThicknessMap,O0=F&&!!k.sheenColorMap,S0=F&&!!k.sheenRoughnessMap,L0=!!k.specularMap,G0=!!k.specularColorMap,h0=!!k.specularIntensityMap,m0=A&&!!k.transmissionMap,KJ=A&&!!k.thicknessMap,g=!!k.gradientMap,V0=!!k.alphaMap,W0=k.alphaTest>0,M0=!!k.alphaHash,w0=!!k.extensions,Y0=S8;if(k.toneMapped){if(F0===null||F0.isXRRenderTarget===!0)Y0=J.toneMapping}let E0={shaderID:f,shaderType:k.type,shaderName:k.name,vertexShader:i,fragmentShader:B,defines:k.defines,customVertexShaderID:Z0,customFragmentShaderID:N0,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:q,batching:C0,batchingColor:C0&&l._colorsTexture!==null,instancing:l0,instancingColor:l0&&l.instanceColor!==null,instancingMorph:l0&&l.morphTexture!==null,outputColorSpace:F0===null?J.outputColorSpace:F0.isXRRenderTarget===!0?F0.texture.colorSpace:XJ.workingColorSpace,alphaToCoverage:!!k.alphaToCoverage,map:b0,matcap:c0,envMap:s0,envMapMode:s0&&y.mapping,envMapCubeUVHeight:T,aoMap:x0,lightMap:UJ,bumpMap:i0,normalMap:qJ,displacementMap:YJ,emissiveMap:GJ,normalMapObjectSpace:qJ&&k.normalMapType===WZ,normalMapTangentSpace:qJ&&k.normalMapType===l$,packedNormalMap:qJ&&k.normalMapType===l$&&QN(k.normalMap.format),metalnessMap:HJ,roughnessMap:b,anisotropy:gJ,anisotropyMap:x,clearcoat:e0,clearcoatMap:X0,clearcoatNormalMap:U0,clearcoatRoughnessMap:R0,dispersion:h,iridescence:D,iridescenceMap:t,iridescenceThicknessMap:$0,sheen:F,sheenColorMap:O0,sheenRoughnessMap:S0,specularMap:L0,specularColorMap:G0,specularIntensityMap:h0,transmission:A,transmissionMap:m0,thicknessMap:KJ,gradientMap:g,opaque:k.transparent===!1&&k.blending===m7&&k.alphaToCoverage===!1,alphaMap:V0,alphaTest:W0,alphaHash:M0,combine:k.combine,mapUv:b0&&V(k.map.channel),aoMapUv:x0&&V(k.aoMap.channel),lightMapUv:UJ&&V(k.lightMap.channel),bumpMapUv:i0&&V(k.bumpMap.channel),normalMapUv:qJ&&V(k.normalMap.channel),displacementMapUv:YJ&&V(k.displacementMap.channel),emissiveMapUv:GJ&&V(k.emissiveMap.channel),metalnessMapUv:HJ&&V(k.metalnessMap.channel),roughnessMapUv:b&&V(k.roughnessMap.channel),anisotropyMapUv:x&&V(k.anisotropyMap.channel),clearcoatMapUv:X0&&V(k.clearcoatMap.channel),clearcoatNormalMapUv:U0&&V(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R0&&V(k.clearcoatRoughnessMap.channel),iridescenceMapUv:t&&V(k.iridescenceMap.channel),iridescenceThicknessMapUv:$0&&V(k.iridescenceThicknessMap.channel),sheenColorMapUv:O0&&V(k.sheenColorMap.channel),sheenRoughnessMapUv:S0&&V(k.sheenRoughnessMap.channel),specularMapUv:L0&&V(k.specularMap.channel),specularColorMapUv:G0&&V(k.specularColorMap.channel),specularIntensityMapUv:h0&&V(k.specularIntensityMap.channel),transmissionMapUv:m0&&V(k.transmissionMap.channel),thicknessMapUv:KJ&&V(k.thicknessMap.channel),alphaMapUv:V0&&V(k.alphaMap.channel),vertexTangents:!!r.attributes.tangent&&(qJ||gJ),vertexNormals:!!r.attributes.normal,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!r.attributes.color&&r.attributes.color.itemSize===4,pointsUvs:l.isPoints===!0&&!!r.attributes.uv&&(b0||V0),fog:!!c,useFog:k.fog===!0,fogExp2:!!c&&c.isFogExp2,flatShading:k.wireframe===!1&&(k.flatShading===!0||r.attributes.normal===void 0&&qJ===!1&&(k.isMeshLambertMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isMeshPhysicalMaterial)),sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:O,reversedDepthBuffer:k0,skinning:l.isSkinnedMesh===!0,hasPositionAttribute:r.attributes.position!==void 0,morphTargets:r.morphAttributes.position!==void 0,morphNormals:r.morphAttributes.normal!==void 0,morphColors:r.morphAttributes.color!==void 0,morphTargetsCount:d,morphTextureStride:J0,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:e.length,numClippingPlanes:Z.numPlanes,numClipIntersection:Z.numIntersection,dithering:k.dithering,shadowMapEnabled:J.shadowMap.enabled&&o.length>0,shadowMapType:J.shadowMap.type,toneMapping:Y0,decodeVideoTexture:b0&&k.map.isVideoTexture===!0&&XJ.getTransfer(k.map.colorSpace)===BJ,decodeVideoTextureEmissive:GJ&&k.emissiveMap.isVideoTexture===!0&&XJ.getTransfer(k.emissiveMap.colorSpace)===BJ,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===PJ,flipSided:k.side===tJ,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:w0&&k.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(w0&&k.extensions.multiDraw===!0||C0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return E0.vertexUv1s=H.has(1),E0.vertexUv2s=H.has(2),E0.vertexUv3s=H.has(3),H.clear(),E0}function E(k){let z=[];if(k.shaderID)z.push(k.shaderID);else z.push(k.customVertexShaderID),z.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let o in k.defines)z.push(o),z.push(k.defines[o]);if(k.isRawShaderMaterial===!1)N(z,k),S(z,k),z.push(J.outputColorSpace);return z.push(k.customProgramCacheKey),z.join()}function N(k,z){k.push(z.precision),k.push(z.outputColorSpace),k.push(z.envMapMode),k.push(z.envMapCubeUVHeight),k.push(z.mapUv),k.push(z.alphaMapUv),k.push(z.lightMapUv),k.push(z.aoMapUv),k.push(z.bumpMapUv),k.push(z.normalMapUv),k.push(z.displacementMapUv),k.push(z.emissiveMapUv),k.push(z.metalnessMapUv),k.push(z.roughnessMapUv),k.push(z.anisotropyMapUv),k.push(z.clearcoatMapUv),k.push(z.clearcoatNormalMapUv),k.push(z.clearcoatRoughnessMapUv),k.push(z.iridescenceMapUv),k.push(z.iridescenceThicknessMapUv),k.push(z.sheenColorMapUv),k.push(z.sheenRoughnessMapUv),k.push(z.specularMapUv),k.push(z.specularColorMapUv),k.push(z.specularIntensityMapUv),k.push(z.transmissionMapUv),k.push(z.thicknessMapUv),k.push(z.combine),k.push(z.fogExp2),k.push(z.sizeAttenuation),k.push(z.morphTargetsCount),k.push(z.morphAttributeCount),k.push(z.numDirLights),k.push(z.numPointLights),k.push(z.numSpotLights),k.push(z.numSpotLightMaps),k.push(z.numHemiLights),k.push(z.numRectAreaLights),k.push(z.numDirLightShadows),k.push(z.numPointLightShadows),k.push(z.numSpotLightShadows),k.push(z.numSpotLightShadowsWithMaps),k.push(z.numLightProbes),k.push(z.shadowMapType),k.push(z.toneMapping),k.push(z.numClippingPlanes),k.push(z.numClipIntersection),k.push(z.depthPacking)}function S(k,z){if(X.disableAll(),z.instancing)X.enable(0);if(z.instancingColor)X.enable(1);if(z.instancingMorph)X.enable(2);if(z.matcap)X.enable(3);if(z.envMap)X.enable(4);if(z.normalMapObjectSpace)X.enable(5);if(z.normalMapTangentSpace)X.enable(6);if(z.clearcoat)X.enable(7);if(z.iridescence)X.enable(8);if(z.alphaTest)X.enable(9);if(z.vertexColors)X.enable(10);if(z.vertexAlphas)X.enable(11);if(z.vertexUv1s)X.enable(12);if(z.vertexUv2s)X.enable(13);if(z.vertexUv3s)X.enable(14);if(z.vertexTangents)X.enable(15);if(z.anisotropy)X.enable(16);if(z.alphaHash)X.enable(17);if(z.batching)X.enable(18);if(z.dispersion)X.enable(19);if(z.batchingColor)X.enable(20);if(z.gradientMap)X.enable(21);if(z.packedNormalMap)X.enable(22);if(z.vertexNormals)X.enable(23);if(k.push(X.mask),X.disableAll(),z.fog)X.enable(0);if(z.useFog)X.enable(1);if(z.flatShading)X.enable(2);if(z.logarithmicDepthBuffer)X.enable(3);if(z.reversedDepthBuffer)X.enable(4);if(z.skinning)X.enable(5);if(z.morphTargets)X.enable(6);if(z.morphNormals)X.enable(7);if(z.morphColors)X.enable(8);if(z.premultipliedAlpha)X.enable(9);if(z.shadowMapEnabled)X.enable(10);if(z.doubleSided)X.enable(11);if(z.flipSided)X.enable(12);if(z.useDepthPacking)X.enable(13);if(z.dithering)X.enable(14);if(z.transmission)X.enable(15);if(z.sheen)X.enable(16);if(z.opaque)X.enable(17);if(z.pointsUvs)X.enable(18);if(z.decodeVideoTexture)X.enable(19);if(z.decodeVideoTextureEmissive)X.enable(20);if(z.alphaToCoverage)X.enable(21);if(z.numLightProbeGrids>0)X.enable(22);if(z.hasPositionAttribute)X.enable(23);k.push(X.mask)}function P(k){let z=R[k.type],o;if(z){let j=u8[z];o=EZ.clone(j.uniforms)}else o=k.uniforms;return o}function M(k,z){let o=G.get(z);if(o!==void 0)++o.usedTimes;else o=new eq(J,z,k,W),U.push(o),G.set(z,o);return o}function _(k){if(--k.usedTimes===0){let z=U.indexOf(k);U[z]=U[U.length-1],U.pop(),G.delete(k.cacheKey),k.destroy()}}function C(k){Y.remove(k)}function w(){Y.dispose()}return{getParameters:I,getProgramCacheKey:E,getUniforms:P,acquireProgram:M,releaseProgram:_,releaseShaderCache:C,programs:U,dispose:w}}function KN(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function W(X,Y,H){J.get(X)[Y]=H}function Z(){J=new WeakMap}return{has:Q,get:$,remove:K,update:W,dispose:Z}}function WN(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function pZ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function mZ(){let J=[],Q=0,$=[],K=[],W=[];function Z(){Q=0,$.length=0,K.length=0,W.length=0}function X(q){let R=0;if(q.isInstancedMesh)R+=2;if(q.isSkinnedMesh)R+=1;return R}function Y(q,R,V,I,E,N){let S=J[Q];if(S===void 0)S={id:q.id,object:q,geometry:R,material:V,materialVariant:X(q),groupOrder:I,renderOrder:q.renderOrder,z:E,group:N},J[Q]=S;else S.id=q.id,S.object=q,S.geometry=R,S.material=V,S.materialVariant=X(q),S.groupOrder=I,S.renderOrder=q.renderOrder,S.z=E,S.group=N;return Q++,S}function H(q,R,V,I,E,N){let S=Y(q,R,V,I,E,N);if(V.transmission>0)K.push(S);else if(V.transparent===!0)W.push(S);else $.push(S)}function U(q,R,V,I,E,N){let S=Y(q,R,V,I,E,N);if(V.transmission>0)K.unshift(S);else if(V.transparent===!0)W.unshift(S);else $.unshift(S)}function G(q,R,V){if($.length>1)$.sort(q||WN);if(K.length>1)K.sort(R||pZ);if(W.length>1)W.sort(R||pZ);if(V)$.reverse(),K.reverse(),W.reverse()}function O(){for(let q=Q,R=J.length;q<R;q++){let V=J[q];if(V.id===null)break;V.id=null,V.object=null,V.geometry=null,V.material=null,V.group=null}}return{opaque:$,transmissive:K,transparent:W,init:Z,push:H,unshift:U,finish:O,sort:G}}function ZN(){let J=new WeakMap;function Q(K,W){let Z=J.get(K),X;if(Z===void 0)X=new mZ,J.set(K,[X]);else if(W>=Z.length)X=new mZ,Z.push(X);else X=Z[W];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function XN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new p,color:new t0};break;case"SpotLight":$={position:new p,direction:new p,color:new t0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new p,color:new t0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new p,skyColor:new t0,groundColor:new t0};break;case"RectAreaLight":$={color:new t0,position:new p,halfWidth:new p,halfHeight:new p};break}return J[Q.id]=$,$}}}function YN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new p0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new p0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new p0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var HN=0;function UN(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function qN(J){let Q=new XN,$=YN(),K={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)K.probe.push(new p);let W=new p,Z=new wJ,X=new wJ;function Y(U){let G=0,O=0,q=0;for(let z=0;z<9;z++)K.probe[z].set(0,0,0);let R=0,V=0,I=0,E=0,N=0,S=0,P=0,M=0,_=0,C=0,w=0;U.sort(UN);for(let z=0,o=U.length;z<o;z++){let j=U[z],l=j.color,e=j.intensity,c=j.distance,r=null;if(j.shadow&&j.shadow.map)if(j.shadow.map.texture.format===g9)r=j.shadow.map.texture;else r=j.shadow.map.depthTexture||j.shadow.map.texture;if(j.isAmbientLight)G+=l.r*e,O+=l.g*e,q+=l.b*e;else if(j.isLightProbe){for(let Q0=0;Q0<9;Q0++)K.probe[Q0].addScaledVector(j.sh.coefficients[Q0],e);w++}else if(j.isDirectionalLight){let Q0=Q.get(j);if(Q0.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let u=j.shadow,y=$.get(j);y.shadowIntensity=u.intensity,y.shadowBias=u.bias,y.shadowNormalBias=u.normalBias,y.shadowRadius=u.radius,y.shadowMapSize=u.mapSize,K.directionalShadow[R]=y,K.directionalShadowMap[R]=r,K.directionalShadowMatrix[R]=j.shadow.matrix,S++}K.directional[R]=Q0,R++}else if(j.isSpotLight){let Q0=Q.get(j);Q0.position.setFromMatrixPosition(j.matrixWorld),Q0.color.copy(l).multiplyScalar(e),Q0.distance=c,Q0.coneCos=Math.cos(j.angle),Q0.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),Q0.decay=j.decay,K.spot[I]=Q0;let u=j.shadow;if(j.map){if(K.spotLightMap[_]=j.map,_++,u.updateMatrices(j),j.castShadow)C++}if(K.spotLightMatrix[I]=u.matrix,j.castShadow){let y=$.get(j);y.shadowIntensity=u.intensity,y.shadowBias=u.bias,y.shadowNormalBias=u.normalBias,y.shadowRadius=u.radius,y.shadowMapSize=u.mapSize,K.spotShadow[I]=y,K.spotShadowMap[I]=r,M++}I++}else if(j.isRectAreaLight){let Q0=Q.get(j);Q0.color.copy(l).multiplyScalar(e),Q0.halfWidth.set(j.width*0.5,0,0),Q0.halfHeight.set(0,j.height*0.5,0),K.rectArea[E]=Q0,E++}else if(j.isPointLight){let Q0=Q.get(j);if(Q0.color.copy(j.color).multiplyScalar(j.intensity),Q0.distance=j.distance,Q0.decay=j.decay,j.castShadow){let u=j.shadow,y=$.get(j);y.shadowIntensity=u.intensity,y.shadowBias=u.bias,y.shadowNormalBias=u.normalBias,y.shadowRadius=u.radius,y.shadowMapSize=u.mapSize,y.shadowCameraNear=u.camera.near,y.shadowCameraFar=u.camera.far,K.pointShadow[V]=y,K.pointShadowMap[V]=r,K.pointShadowMatrix[V]=j.shadow.matrix,P++}K.point[V]=Q0,V++}else if(j.isHemisphereLight){let Q0=Q.get(j);Q0.skyColor.copy(j.color).multiplyScalar(e),Q0.groundColor.copy(j.groundColor).multiplyScalar(e),K.hemi[N]=Q0,N++}}if(E>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=P0.LTC_FLOAT_1,K.rectAreaLTC2=P0.LTC_FLOAT_2;else K.rectAreaLTC1=P0.LTC_HALF_1,K.rectAreaLTC2=P0.LTC_HALF_2;K.ambient[0]=G,K.ambient[1]=O,K.ambient[2]=q;let k=K.hash;if(k.directionalLength!==R||k.pointLength!==V||k.spotLength!==I||k.rectAreaLength!==E||k.hemiLength!==N||k.numDirectionalShadows!==S||k.numPointShadows!==P||k.numSpotShadows!==M||k.numSpotMaps!==_||k.numLightProbes!==w)K.directional.length=R,K.spot.length=I,K.rectArea.length=E,K.point.length=V,K.hemi.length=N,K.directionalShadow.length=S,K.directionalShadowMap.length=S,K.pointShadow.length=P,K.pointShadowMap.length=P,K.spotShadow.length=M,K.spotShadowMap.length=M,K.directionalShadowMatrix.length=S,K.pointShadowMatrix.length=P,K.spotLightMatrix.length=M+_-C,K.spotLightMap.length=_,K.numSpotLightShadowsWithMaps=C,K.numLightProbes=w,k.directionalLength=R,k.pointLength=V,k.spotLength=I,k.rectAreaLength=E,k.hemiLength=N,k.numDirectionalShadows=S,k.numPointShadows=P,k.numSpotShadows=M,k.numSpotMaps=_,k.numLightProbes=w,K.version=HN++}function H(U,G){let O=0,q=0,R=0,V=0,I=0,E=G.matrixWorldInverse;for(let N=0,S=U.length;N<S;N++){let P=U[N];if(P.isDirectionalLight){let M=K.directional[O];M.direction.setFromMatrixPosition(P.matrixWorld),W.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(W),M.direction.transformDirection(E),O++}else if(P.isSpotLight){let M=K.spot[R];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(E),M.direction.setFromMatrixPosition(P.matrixWorld),W.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(W),M.direction.transformDirection(E),R++}else if(P.isRectAreaLight){let M=K.rectArea[V];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(E),X.identity(),Z.copy(P.matrixWorld),Z.premultiply(E),X.extractRotation(Z),M.halfWidth.set(P.width*0.5,0,0),M.halfHeight.set(0,P.height*0.5,0),M.halfWidth.applyMatrix4(X),M.halfHeight.applyMatrix4(X),V++}else if(P.isPointLight){let M=K.point[q];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(E),q++}else if(P.isHemisphereLight){let M=K.hemi[I];M.direction.setFromMatrixPosition(P.matrixWorld),M.direction.transformDirection(E),I++}}}return{setup:Y,setupView:H,state:K}}function dZ(J){let Q=new qN(J),$=[],K=[],W=[];function Z(q){O.camera=q,$.length=0,K.length=0,W.length=0}function X(q){$.push(q)}function Y(q){K.push(q)}function H(q){W.push(q)}function U(){Q.setup($)}function G(q){Q.setupView($,q)}let O={lightsArray:$,shadowsArray:K,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:Z,state:O,setupLights:U,setupLightsView:G,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function NN(J){let Q=new WeakMap;function $(W,Z=0){let X=Q.get(W),Y;if(X===void 0)Y=new dZ(J),Q.set(W,[Y]);else if(Z>=X.length)Y=new dZ(J),X.push(Y);else Y=X[Z];return Y}function K(){Q=new WeakMap}return{get:$,dispose:K}}var GN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ON=[new p(1,0,0),new p(-1,0,0),new p(0,1,0),new p(0,-1,0),new p(0,0,1),new p(0,0,-1)],DN=[new p(0,-1,0),new p(0,-1,0),new p(0,0,1),new p(0,0,-1),new p(0,-1,0),new p(0,-1,0)],uZ=new wJ,$6=new p,_K=new p;function EN(J,Q,$){let K=new a7,W=new p0,Z=new p0,X=new TJ,Y=new ZK,H=new XK,U={},G=$.maxTextureSize,O={[O7]:tJ,[tJ]:O7,[PJ]:PJ},q=new U8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new p0},radius:{value:4}},vertexShader:GN,fragmentShader:FN}),R=q.clone();R.defines.HORIZONTAL_PASS=1;let V=new hJ;V.setAttribute("position",new oJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new K0(V,q),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v9;let N=this.type;this.render=function(C,w,k){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(C.length===0)return;if(this.type===kW)u0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=v9;let z=J.getRenderTarget(),o=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),l=J.state;if(l.setBlending(f8),l.buffers.depth.getReversed()===!0)l.buffers.color.setClear(0,0,0,0);else l.buffers.color.setClear(1,1,1,1);l.buffers.depth.setTest(!0),l.setScissorTest(!1);let e=N!==this.type;if(e)w.traverse(function(c){if(c.material)if(Array.isArray(c.material))c.material.forEach((r)=>r.needsUpdate=!0);else c.material.needsUpdate=!0});for(let c=0,r=C.length;c<r;c++){let Q0=C[c],u=Q0.shadow;if(u===void 0){u0("WebGLShadowMap:",Q0,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;W.copy(u.mapSize);let y=u.getFrameExtents();if(W.multiply(y),Z.copy(u.mapSize),W.x>G||W.y>G){if(W.x>G)Z.x=Math.floor(G/y.x),W.x=Z.x*y.x,u.mapSize.x=Z.x;if(W.y>G)Z.y=Math.floor(G/y.y),W.y=Z.y*y.y,u.mapSize.y=Z.y}let T=J.state.buffers.depth.getReversed();if(u.camera._reversedDepth=T,u.map===null||e===!0){if(u.map!==null){if(u.map.depthTexture!==null)u.map.depthTexture.dispose(),u.map.depthTexture=null;u.map.dispose()}if(this.type===F7){if(Q0.isPointLight){u0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}u.map=new B8(W.x,W.y,{format:g9,type:J9,minFilter:H8,magFilter:H8,generateMipmaps:!1}),u.map.texture.name=Q0.name+".shadowMap",u.map.depthTexture=new M9(W.x,W.y,e8),u.map.depthTexture.name=Q0.name+".shadowMapDepth",u.map.depthTexture.format=b9,u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=R9,u.map.depthTexture.magFilter=R9}else{if(Q0.isPointLight)u.map=new jK(W.x),u.map.depthTexture=new $K(W.x,k9);else u.map=new B8(W.x,W.y),u.map.depthTexture=new M9(W.x,W.y,k9);if(u.map.depthTexture.name=Q0.name+".shadowMap",u.map.depthTexture.format=b9,this.type===v9)u.map.depthTexture.compareFunction=T?r6:a6,u.map.depthTexture.minFilter=H8,u.map.depthTexture.magFilter=H8;else u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=R9,u.map.depthTexture.magFilter=R9}u.camera.updateProjectionMatrix()}let f=u.map.isWebGLCubeRenderTarget?6:1;for(let v=0;v<f;v++){if(u.map.isWebGLCubeRenderTarget)J.setRenderTarget(u.map,v),J.clear();else{if(v===0)J.setRenderTarget(u.map),J.clear();let d=u.getViewport(v);X.set(Z.x*d.x,Z.y*d.y,Z.x*d.z,Z.y*d.w),l.viewport(X)}if(Q0.isPointLight){let{camera:d,matrix:J0}=u,i=Q0.distance||d.far;if(i!==d.far)d.far=i,d.updateProjectionMatrix();$6.setFromMatrixPosition(Q0.matrixWorld),d.position.copy($6),_K.copy(d.position),_K.add(ON[v]),d.up.copy(DN[v]),d.lookAt(_K),d.updateMatrixWorld(),J0.makeTranslation(-$6.x,-$6.y,-$6.z),uZ.multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse),u._frustum.setFromProjectionMatrix(uZ,d.coordinateSystem,d.reversedDepth)}else u.updateMatrices(Q0);K=u.getFrustum(),M(w,k,u.camera,Q0,this.type)}if(u.isPointLightShadow!==!0&&this.type===F7)S(u,k);u.needsUpdate=!1}N=this.type,E.needsUpdate=!1,J.setRenderTarget(z,o,j)};function S(C,w){let k=Q.update(I);if(q.defines.VSM_SAMPLES!==C.blurSamples)q.defines.VSM_SAMPLES=C.blurSamples,R.defines.VSM_SAMPLES=C.blurSamples,q.needsUpdate=!0,R.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new B8(W.x,W.y,{format:g9,type:J9});q.uniforms.shadow_pass.value=C.map.depthTexture,q.uniforms.resolution.value=C.mapSize,q.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(w,null,k,q,I,null),R.uniforms.shadow_pass.value=C.mapPass.texture,R.uniforms.resolution.value=C.mapSize,R.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(w,null,k,R,I,null)}function P(C,w,k,z){let o=null,j=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(j!==void 0)o=j;else if(o=k.isPointLight===!0?H:Y,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let l=o.uuid,e=w.uuid,c=U[l];if(c===void 0)c={},U[l]=c;let r=c[e];if(r===void 0)r=o.clone(),c[e]=r,w.addEventListener("dispose",_);o=r}if(o.visible=w.visible,o.wireframe=w.wireframe,z===F7)o.side=w.shadowSide!==null?w.shadowSide:w.side;else o.side=w.shadowSide!==null?w.shadowSide:O[w.side];if(o.alphaMap=w.alphaMap,o.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,o.map=w.map,o.clipShadows=w.clipShadows,o.clippingPlanes=w.clippingPlanes,o.clipIntersection=w.clipIntersection,o.displacementMap=w.displacementMap,o.displacementScale=w.displacementScale,o.displacementBias=w.displacementBias,o.wireframeLinewidth=w.wireframeLinewidth,o.linewidth=w.linewidth,k.isPointLight===!0&&o.isMeshDistanceMaterial===!0){let l=J.properties.get(o);l.light=k}return o}function M(C,w,k,z,o){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&o===F7)&&(!C.frustumCulled||K.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let e=Q.update(C),c=C.material;if(Array.isArray(c)){let r=e.groups;for(let Q0=0,u=r.length;Q0<u;Q0++){let y=r[Q0],T=c[y.materialIndex];if(T&&T.visible){let f=P(C,T,z,o);C.onBeforeShadow(J,C,w,k,e,f,y),J.renderBufferDirect(k,null,e,f,C,y),C.onAfterShadow(J,C,w,k,e,f,y)}}}else if(c.visible){let r=P(C,c,z,o);C.onBeforeShadow(J,C,w,k,e,r,null),J.renderBufferDirect(k,null,e,r,C,null),C.onAfterShadow(J,C,w,k,e,r,null)}}}let l=C.children;for(let e=0,c=l.length;e<c;e++)M(l[e],w,k,z,o)}function _(C){C.target.removeEventListener("dispose",_);for(let k in U){let z=U[k],o=C.target.uuid;if(o in z)z[o].dispose(),delete z[o]}}}function RN(J,Q){function $(){let g=!1,V0=new TJ,W0=null,M0=new TJ(0,0,0,0);return{setMask:function(w0){if(W0!==w0&&!g)J.colorMask(w0,w0,w0,w0),W0=w0},setLocked:function(w0){g=w0},setClear:function(w0,Y0,E0,a0,AJ){if(AJ===!0)w0*=a0,Y0*=a0,E0*=a0;if(V0.set(w0,Y0,E0,a0),M0.equals(V0)===!1)J.clearColor(w0,Y0,E0,a0),M0.copy(V0)},reset:function(){g=!1,W0=null,M0.set(-1,0,0,0)}}}function K(){let g=!1,V0=!1,W0=null,M0=null,w0=null;return{setReversed:function(Y0){if(V0!==Y0){let E0=Q.get("EXT_clip_control");if(Y0)E0.clipControlEXT(E0.LOWER_LEFT_EXT,E0.ZERO_TO_ONE_EXT);else E0.clipControlEXT(E0.LOWER_LEFT_EXT,E0.NEGATIVE_ONE_TO_ONE_EXT);V0=Y0;let a0=w0;w0=null,this.setClear(a0)}},getReversed:function(){return V0},setTest:function(Y0){if(Y0)F0(J.DEPTH_TEST);else k0(J.DEPTH_TEST)},setMask:function(Y0){if(W0!==Y0&&!g)J.depthMask(Y0),W0=Y0},setFunc:function(Y0){if(V0)Y0=OZ[Y0];if(M0!==Y0){switch(Y0){case gW:J.depthFunc(J.NEVER);break;case pW:J.depthFunc(J.ALWAYS);break;case mW:J.depthFunc(J.LESS);break;case Q$:J.depthFunc(J.LEQUAL);break;case dW:J.depthFunc(J.EQUAL);break;case uW:J.depthFunc(J.GEQUAL);break;case lW:J.depthFunc(J.GREATER);break;case cW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}M0=Y0}},setLocked:function(Y0){g=Y0},setClear:function(Y0){if(w0!==Y0){if(w0=Y0,V0)Y0=1-Y0;J.clearDepth(Y0)}},reset:function(){g=!1,W0=null,M0=null,w0=null,V0=!1}}}function W(){let g=!1,V0=null,W0=null,M0=null,w0=null,Y0=null,E0=null,a0=null,AJ=null;return{setTest:function(OJ){if(!g)if(OJ)F0(J.STENCIL_TEST);else k0(J.STENCIL_TEST)},setMask:function(OJ){if(V0!==OJ&&!g)J.stencilMask(OJ),V0=OJ},setFunc:function(OJ,Z8,N8){if(W0!==OJ||M0!==Z8||w0!==N8)J.stencilFunc(OJ,Z8,N8),W0=OJ,M0=Z8,w0=N8},setOp:function(OJ,Z8,N8){if(Y0!==OJ||E0!==Z8||a0!==N8)J.stencilOp(OJ,Z8,N8),Y0=OJ,E0=Z8,a0=N8},setLocked:function(OJ){g=OJ},setClear:function(OJ){if(AJ!==OJ)J.clearStencil(OJ),AJ=OJ},reset:function(){g=!1,V0=null,W0=null,M0=null,w0=null,Y0=null,E0=null,a0=null,AJ=null}}}let Z=new $,X=new K,Y=new W,H=new WeakMap,U=new WeakMap,G={},O={},q={},R=new WeakMap,V=[],I=null,E=!1,N=null,S=null,P=null,M=null,_=null,C=null,w=null,k=new t0(0,0,0),z=0,o=!1,j=null,l=null,e=null,c=null,r=null,Q0=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,y=0,T=J.getParameter(J.VERSION);if(T.indexOf("WebGL")!==-1)y=parseFloat(/^WebGL (\d)/.exec(T)[1]),u=y>=1;else if(T.indexOf("OpenGL ES")!==-1)y=parseFloat(/^OpenGL ES (\d)/.exec(T)[1]),u=y>=2;let f=null,v={},d=J.getParameter(J.SCISSOR_BOX),J0=J.getParameter(J.VIEWPORT),i=new TJ().fromArray(d),B=new TJ().fromArray(J0);function Z0(g,V0,W0,M0){let w0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(g,Y0),J.texParameteri(g,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(g,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let E0=0;E0<W0;E0++)if(g===J.TEXTURE_3D||g===J.TEXTURE_2D_ARRAY)J.texImage3D(V0,0,J.RGBA,1,1,M0,0,J.RGBA,J.UNSIGNED_BYTE,w0);else J.texImage2D(V0+E0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,w0);return Y0}let N0={};N0[J.TEXTURE_2D]=Z0(J.TEXTURE_2D,J.TEXTURE_2D,1),N0[J.TEXTURE_CUBE_MAP]=Z0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),N0[J.TEXTURE_2D_ARRAY]=Z0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),N0[J.TEXTURE_3D]=Z0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),Z.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),F0(J.DEPTH_TEST),X.setFunc(Q$),i0(!1),qJ(tQ),F0(J.CULL_FACE),x0(f8);function F0(g){if(G[g]!==!0)J.enable(g),G[g]=!0}function k0(g){if(G[g]!==!1)J.disable(g),G[g]=!1}function l0(g,V0){if(q[g]!==V0){if(J.bindFramebuffer(g,V0),q[g]=V0,g===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=V0;if(g===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=V0;return!0}return!1}function C0(g,V0){let W0=V,M0=!1;if(g){if(W0=R.get(V0),W0===void 0)W0=[],R.set(V0,W0);let w0=g.textures;if(W0.length!==w0.length||W0[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,E0=w0.length;Y0<E0;Y0++)W0[Y0]=J.COLOR_ATTACHMENT0+Y0;W0.length=w0.length,M0=!0}}else if(W0[0]!==J.BACK)W0[0]=J.BACK,M0=!0;if(M0)J.drawBuffers(W0)}function b0(g){if(I!==g)return J.useProgram(g),I=g,!0;return!1}let c0={[D7]:J.FUNC_ADD,[MW]:J.FUNC_SUBTRACT,[LW]:J.FUNC_REVERSE_SUBTRACT};c0[BW]=J.MIN,c0[zW]=J.MAX;let s0={[IW]:J.ZERO,[PW]:J.ONE,[AW]:J.SRC_COLOR,[_W]:J.SRC_ALPHA,[vW]:J.SRC_ALPHA_SATURATE,[jW]:J.DST_COLOR,[TW]:J.DST_ALPHA,[wW]:J.ONE_MINUS_SRC_COLOR,[CW]:J.ONE_MINUS_SRC_ALPHA,[yW]:J.ONE_MINUS_DST_COLOR,[SW]:J.ONE_MINUS_DST_ALPHA,[hW]:J.CONSTANT_COLOR,[fW]:J.ONE_MINUS_CONSTANT_COLOR,[bW]:J.CONSTANT_ALPHA,[xW]:J.ONE_MINUS_CONSTANT_ALPHA};function x0(g,V0,W0,M0,w0,Y0,E0,a0,AJ,OJ){if(g===f8){if(E===!0)k0(J.BLEND),E=!1;return}if(E===!1)F0(J.BLEND),E=!0;if(g!==VW){if(g!==N||OJ!==o){if(S!==D7||_!==D7)J.blendEquation(J.FUNC_ADD),S=D7,_=D7;if(OJ)switch(g){case m7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case b8:J.blendFunc(J.ONE,J.ONE);break;case eQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case J$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:n0("WebGLState: Invalid blending: ",g);break}else switch(g){case m7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case b8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case eQ:n0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J$:n0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:n0("WebGLState: Invalid blending: ",g);break}P=null,M=null,C=null,w=null,k.set(0,0,0),z=0,N=g,o=OJ}return}if(w0=w0||V0,Y0=Y0||W0,E0=E0||M0,V0!==S||w0!==_)J.blendEquationSeparate(c0[V0],c0[w0]),S=V0,_=w0;if(W0!==P||M0!==M||Y0!==C||E0!==w)J.blendFuncSeparate(s0[W0],s0[M0],s0[Y0],s0[E0]),P=W0,M=M0,C=Y0,w=E0;if(a0.equals(k)===!1||AJ!==z)J.blendColor(a0.r,a0.g,a0.b,AJ),k.copy(a0),z=AJ;N=g,o=!1}function UJ(g,V0){g.side===PJ?k0(J.CULL_FACE):F0(J.CULL_FACE);let W0=g.side===tJ;if(V0)W0=!W0;i0(W0),g.blending===m7&&g.transparent===!1?x0(f8):x0(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),X.setFunc(g.depthFunc),X.setTest(g.depthTest),X.setMask(g.depthWrite),Z.setMask(g.colorWrite);let M0=g.stencilWrite;if(Y.setTest(M0),M0)Y.setMask(g.stencilWriteMask),Y.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),Y.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass);GJ(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?F0(J.SAMPLE_ALPHA_TO_COVERAGE):k0(J.SAMPLE_ALPHA_TO_COVERAGE)}function i0(g){if(j!==g){if(g)J.frontFace(J.CW);else J.frontFace(J.CCW);j=g}}function qJ(g){if(g!==EW){if(F0(J.CULL_FACE),g!==l)if(g===tQ)J.cullFace(J.BACK);else if(g===RW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else k0(J.CULL_FACE);l=g}function YJ(g){if(g!==e){if(u)J.lineWidth(g);e=g}}function GJ(g,V0,W0){if(g){if(F0(J.POLYGON_OFFSET_FILL),c!==V0||r!==W0){if(c=V0,r=W0,X.getReversed())V0=-V0;J.polygonOffset(V0,W0)}}else k0(J.POLYGON_OFFSET_FILL)}function HJ(g){if(g)F0(J.SCISSOR_TEST);else k0(J.SCISSOR_TEST)}function b(g){if(g===void 0)g=J.TEXTURE0+Q0-1;if(f!==g)J.activeTexture(g),f=g}function gJ(g,V0,W0){if(W0===void 0)if(f===null)W0=J.TEXTURE0+Q0-1;else W0=f;let M0=v[W0];if(M0===void 0)M0={type:void 0,texture:void 0},v[W0]=M0;if(M0.type!==g||M0.texture!==V0){if(f!==W0)J.activeTexture(W0),f=W0;J.bindTexture(g,V0||N0[g]),M0.type=g,M0.texture=V0}}function e0(){let g=v[f];if(g!==void 0&&g.type!==void 0)J.bindTexture(g.type,null),g.type=void 0,g.texture=void 0}function h(){try{J.compressedTexImage2D(...arguments)}catch(g){n0("WebGLState:",g)}}function D(){try{J.compressedTexImage3D(...arguments)}catch(g){n0("WebGLState:",g)}}function F(){try{J.texSubImage2D(...arguments)}catch(g){n0("WebGLState:",g)}}function A(){try{J.texSubImage3D(...arguments)}catch(g){n0("WebGLState:",g)}}function x(){try{J.compressedTexSubImage2D(...arguments)}catch(g){n0("WebGLState:",g)}}function X0(){try{J.compressedTexSubImage3D(...arguments)}catch(g){n0("WebGLState:",g)}}function U0(){try{J.texStorage2D(...arguments)}catch(g){n0("WebGLState:",g)}}function R0(){try{J.texStorage3D(...arguments)}catch(g){n0("WebGLState:",g)}}function t(){try{J.texImage2D(...arguments)}catch(g){n0("WebGLState:",g)}}function $0(){try{J.texImage3D(...arguments)}catch(g){n0("WebGLState:",g)}}function O0(g){if(O[g]!==void 0)return O[g];else return J.getParameter(g)}function S0(g,V0){if(O[g]!==V0)J.pixelStorei(g,V0),O[g]=V0}function L0(g){if(i.equals(g)===!1)J.scissor(g.x,g.y,g.z,g.w),i.copy(g)}function G0(g){if(B.equals(g)===!1)J.viewport(g.x,g.y,g.z,g.w),B.copy(g)}function h0(g,V0){let W0=U.get(V0);if(W0===void 0)W0=new WeakMap,U.set(V0,W0);let M0=W0.get(g);if(M0===void 0)M0=J.getUniformBlockIndex(V0,g.name),W0.set(g,M0)}function m0(g,V0){let M0=U.get(V0).get(g);if(H.get(V0)!==M0)J.uniformBlockBinding(V0,M0,g.__bindingPointIndex),H.set(V0,M0)}function KJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},O={},f=null,v={},q={},R=new WeakMap,V=[],I=null,E=!1,N=null,S=null,P=null,M=null,_=null,C=null,w=null,k=new t0(0,0,0),z=0,o=!1,j=null,l=null,e=null,c=null,r=null,i.set(0,0,J.canvas.width,J.canvas.height),B.set(0,0,J.canvas.width,J.canvas.height),Z.reset(),X.reset(),Y.reset()}return{buffers:{color:Z,depth:X,stencil:Y},enable:F0,disable:k0,bindFramebuffer:l0,drawBuffers:C0,useProgram:b0,setBlending:x0,setMaterial:UJ,setFlipSided:i0,setCullFace:qJ,setLineWidth:YJ,setPolygonOffset:GJ,setScissorTest:HJ,activeTexture:b,bindTexture:gJ,unbindTexture:e0,compressedTexImage2D:h,compressedTexImage3D:D,texImage2D:t,texImage3D:$0,pixelStorei:S0,getParameter:O0,updateUBOMapping:h0,uniformBlockBinding:m0,texStorage2D:U0,texStorage3D:R0,texSubImage2D:F,texSubImage3D:A,compressedTexSubImage2D:x,compressedTexSubImage3D:X0,scissor:L0,viewport:G0,reset:KJ}}function kN(J,Q,$,K,W,Z,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new p0,G=new WeakMap,O=new Set,q,R=new WeakMap,V=!1;try{V=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(D){}function I(D,F){return V?new OffscreenCanvas(D,F):p7("canvas")}function E(D,F,A){let x=1,X0=h(D);if(X0.width>A||X0.height>A)x=A/Math.max(X0.width,X0.height);if(x<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let U0=Math.floor(x*X0.width),R0=Math.floor(x*X0.height);if(q===void 0)q=I(U0,R0);let t=F?I(U0,R0):q;return t.width=U0,t.height=R0,t.getContext("2d").drawImage(D,0,0,U0,R0),u0("WebGLRenderer: Texture has been resized from ("+X0.width+"x"+X0.height+") to ("+U0+"x"+R0+")."),t}else{if("data"in D)u0("WebGLRenderer: Image in DataTexture is too big ("+X0.width+"x"+X0.height+").");return D}return D}function N(D){return D.generateMipmaps}function S(D){J.generateMipmap(D)}function P(D){if(D.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(D.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function M(D,F,A,x,X0,U0=!1){if(D!==null){if(J[D]!==void 0)return J[D];u0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let R0;if(x){if(R0=Q.get("EXT_texture_norm16"),!R0)u0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let t=F;if(F===J.RED){if(A===J.FLOAT)t=J.R32F;if(A===J.HALF_FLOAT)t=J.R16F;if(A===J.UNSIGNED_BYTE)t=J.R8;if(A===J.UNSIGNED_SHORT&&R0)t=R0.R16_EXT;if(A===J.SHORT&&R0)t=R0.R16_SNORM_EXT}if(F===J.RED_INTEGER){if(A===J.UNSIGNED_BYTE)t=J.R8UI;if(A===J.UNSIGNED_SHORT)t=J.R16UI;if(A===J.UNSIGNED_INT)t=J.R32UI;if(A===J.BYTE)t=J.R8I;if(A===J.SHORT)t=J.R16I;if(A===J.INT)t=J.R32I}if(F===J.RG){if(A===J.FLOAT)t=J.RG32F;if(A===J.HALF_FLOAT)t=J.RG16F;if(A===J.UNSIGNED_BYTE)t=J.RG8;if(A===J.UNSIGNED_SHORT&&R0)t=R0.RG16_EXT;if(A===J.SHORT&&R0)t=R0.RG16_SNORM_EXT}if(F===J.RG_INTEGER){if(A===J.UNSIGNED_BYTE)t=J.RG8UI;if(A===J.UNSIGNED_SHORT)t=J.RG16UI;if(A===J.UNSIGNED_INT)t=J.RG32UI;if(A===J.BYTE)t=J.RG8I;if(A===J.SHORT)t=J.RG16I;if(A===J.INT)t=J.RG32I}if(F===J.RGB_INTEGER){if(A===J.UNSIGNED_BYTE)t=J.RGB8UI;if(A===J.UNSIGNED_SHORT)t=J.RGB16UI;if(A===J.UNSIGNED_INT)t=J.RGB32UI;if(A===J.BYTE)t=J.RGB8I;if(A===J.SHORT)t=J.RGB16I;if(A===J.INT)t=J.RGB32I}if(F===J.RGBA_INTEGER){if(A===J.UNSIGNED_BYTE)t=J.RGBA8UI;if(A===J.UNSIGNED_SHORT)t=J.RGBA16UI;if(A===J.UNSIGNED_INT)t=J.RGBA32UI;if(A===J.BYTE)t=J.RGBA8I;if(A===J.SHORT)t=J.RGBA16I;if(A===J.INT)t=J.RGBA32I}if(F===J.RGB){if(A===J.UNSIGNED_SHORT&&R0)t=R0.RGB16_EXT;if(A===J.SHORT&&R0)t=R0.RGB16_SNORM_EXT;if(A===J.UNSIGNED_INT_5_9_9_9_REV)t=J.RGB9_E5;if(A===J.UNSIGNED_INT_10F_11F_11F_REV)t=J.R11F_G11F_B10F}if(F===J.RGBA){let $0=U0?n$:XJ.getTransfer(X0);if(A===J.FLOAT)t=J.RGBA32F;if(A===J.HALF_FLOAT)t=J.RGBA16F;if(A===J.UNSIGNED_BYTE)t=$0===BJ?J.SRGB8_ALPHA8:J.RGBA8;if(A===J.UNSIGNED_SHORT&&R0)t=R0.RGBA16_EXT;if(A===J.SHORT&&R0)t=R0.RGBA16_SNORM_EXT;if(A===J.UNSIGNED_SHORT_4_4_4_4)t=J.RGBA4;if(A===J.UNSIGNED_SHORT_5_5_5_1)t=J.RGB5_A1}if(t===J.R16F||t===J.R32F||t===J.RG16F||t===J.RG32F||t===J.RGBA16F||t===J.RGBA32F)Q.get("EXT_color_buffer_float");return t}function _(D,F){let A;if(D){if(F===null||F===k9||F===R7)A=J.DEPTH24_STENCIL8;else if(F===e8)A=J.DEPTH32F_STENCIL8;else if(F===n7)A=J.DEPTH24_STENCIL8,u0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(F===null||F===k9||F===R7)A=J.DEPTH_COMPONENT24;else if(F===e8)A=J.DEPTH_COMPONENT32F;else if(F===n7)A=J.DEPTH_COMPONENT16;return A}function C(D,F){if(N(D)===!0||D.isFramebufferTexture&&D.minFilter!==R9&&D.minFilter!==H8)return Math.log2(Math.max(F.width,F.height))+1;else if(D.mipmaps!==void 0&&D.mipmaps.length>0)return D.mipmaps.length;else if(D.isCompressedTexture&&Array.isArray(D.image))return F.mipmaps.length;else return 1}function w(D){let F=D.target;if(F.removeEventListener("dispose",w),z(F),F.isVideoTexture)G.delete(F);if(F.isHTMLTexture)O.delete(F)}function k(D){let F=D.target;F.removeEventListener("dispose",k),j(F)}function z(D){let F=K.get(D);if(F.__webglInit===void 0)return;let A=D.source,x=R.get(A);if(x){let X0=x[F.__cacheKey];if(X0.usedTimes--,X0.usedTimes===0)o(D);if(Object.keys(x).length===0)R.delete(A)}K.remove(D)}function o(D){let F=K.get(D);J.deleteTexture(F.__webglTexture);let A=D.source,x=R.get(A);delete x[F.__cacheKey],X.memory.textures--}function j(D){let F=K.get(D);if(D.depthTexture)D.depthTexture.dispose(),K.remove(D.depthTexture);if(D.isWebGLCubeRenderTarget)for(let x=0;x<6;x++){if(Array.isArray(F.__webglFramebuffer[x]))for(let X0=0;X0<F.__webglFramebuffer[x].length;X0++)J.deleteFramebuffer(F.__webglFramebuffer[x][X0]);else J.deleteFramebuffer(F.__webglFramebuffer[x]);if(F.__webglDepthbuffer)J.deleteRenderbuffer(F.__webglDepthbuffer[x])}else{if(Array.isArray(F.__webglFramebuffer))for(let x=0;x<F.__webglFramebuffer.length;x++)J.deleteFramebuffer(F.__webglFramebuffer[x]);else J.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer)J.deleteRenderbuffer(F.__webglDepthbuffer);if(F.__webglMultisampledFramebuffer)J.deleteFramebuffer(F.__webglMultisampledFramebuffer);if(F.__webglColorRenderbuffer){for(let x=0;x<F.__webglColorRenderbuffer.length;x++)if(F.__webglColorRenderbuffer[x])J.deleteRenderbuffer(F.__webglColorRenderbuffer[x])}if(F.__webglDepthRenderbuffer)J.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let A=D.textures;for(let x=0,X0=A.length;x<X0;x++){let U0=K.get(A[x]);if(U0.__webglTexture)J.deleteTexture(U0.__webglTexture),X.memory.textures--;K.remove(A[x])}K.remove(D)}let l=0;function e(){l=0}function c(){return l}function r(D){l=D}function Q0(){let D=l;if(D>=W.maxTextures)u0("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+W.maxTextures);return l+=1,D}function u(D){let F=[];return F.push(D.wrapS),F.push(D.wrapT),F.push(D.wrapR||0),F.push(D.magFilter),F.push(D.minFilter),F.push(D.anisotropy),F.push(D.internalFormat),F.push(D.format),F.push(D.type),F.push(D.generateMipmaps),F.push(D.premultiplyAlpha),F.push(D.flipY),F.push(D.unpackAlignment),F.push(D.colorSpace),F.join()}function y(D,F){let A=K.get(D);if(D.isVideoTexture)gJ(D);if(D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&A.__version!==D.version){let x=D.image;if(x===null)u0("WebGLRenderer: Texture marked for update but no image data found.");else if(x.complete===!1)u0("WebGLRenderer: Texture marked for update but image is incomplete");else{k0(A,D,F);return}}else if(D.isExternalTexture)A.__webglTexture=D.sourceTexture?D.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,A.__webglTexture,J.TEXTURE0+F)}function T(D,F){let A=K.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&A.__version!==D.version){k0(A,D,F);return}else if(D.isExternalTexture)A.__webglTexture=D.sourceTexture?D.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,A.__webglTexture,J.TEXTURE0+F)}function f(D,F){let A=K.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&A.__version!==D.version){k0(A,D,F);return}$.bindTexture(J.TEXTURE_3D,A.__webglTexture,J.TEXTURE0+F)}function v(D,F){let A=K.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&A.__version!==D.version){l0(A,D,F);return}$.bindTexture(J.TEXTURE_CUBE_MAP,A.__webglTexture,J.TEXTURE0+F)}let d={[l7]:J.REPEAT,[m6]:J.CLAMP_TO_EDGE,[oW]:J.MIRRORED_REPEAT},J0={[R9]:J.NEAREST,[aW]:J.NEAREST_MIPMAP_NEAREST,[c7]:J.NEAREST_MIPMAP_LINEAR,[H8]:J.LINEAR,[d6]:J.LINEAR_MIPMAP_NEAREST,[f9]:J.LINEAR_MIPMAP_LINEAR},i={[ZZ]:J.NEVER,[qZ]:J.ALWAYS,[XZ]:J.LESS,[a6]:J.LEQUAL,[YZ]:J.EQUAL,[r6]:J.GEQUAL,[HZ]:J.GREATER,[UZ]:J.NOTEQUAL};function B(D,F){if(F.type===e8&&Q.has("OES_texture_float_linear")===!1&&(F.magFilter===H8||F.magFilter===d6||F.magFilter===c7||F.magFilter===f9||F.minFilter===H8||F.minFilter===d6||F.minFilter===c7||F.minFilter===f9))u0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(D,J.TEXTURE_WRAP_S,d[F.wrapS]),J.texParameteri(D,J.TEXTURE_WRAP_T,d[F.wrapT]),D===J.TEXTURE_3D||D===J.TEXTURE_2D_ARRAY)J.texParameteri(D,J.TEXTURE_WRAP_R,d[F.wrapR]);if(J.texParameteri(D,J.TEXTURE_MAG_FILTER,J0[F.magFilter]),J.texParameteri(D,J.TEXTURE_MIN_FILTER,J0[F.minFilter]),F.compareFunction)J.texParameteri(D,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(D,J.TEXTURE_COMPARE_FUNC,i[F.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===R9)return;if(F.minFilter!==c7&&F.minFilter!==f9)return;if(F.type===e8&&Q.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||K.get(F).__currentAnisotropy){let A=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(D,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,W.getMaxAnisotropy())),K.get(F).__currentAnisotropy=F.anisotropy}}}function Z0(D,F){let A=!1;if(D.__webglInit===void 0)D.__webglInit=!0,F.addEventListener("dispose",w);let x=F.source,X0=R.get(x);if(X0===void 0)X0={},R.set(x,X0);let U0=u(F);if(U0!==D.__cacheKey){if(X0[U0]===void 0)X0[U0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,A=!0;X0[U0].usedTimes++;let R0=X0[D.__cacheKey];if(R0!==void 0){if(X0[D.__cacheKey].usedTimes--,R0.usedTimes===0)o(F)}D.__cacheKey=U0,D.__webglTexture=X0[U0].texture}return A}function N0(D,F,A){return Math.floor(Math.floor(D/A)/F)}function F0(D,F,A,x){let U0=D.updateRanges;if(U0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,F.width,F.height,A,x,F.data);else{U0.sort((S0,L0)=>S0.start-L0.start);let R0=0;for(let S0=1;S0<U0.length;S0++){let L0=U0[R0],G0=U0[S0],h0=L0.start+L0.count,m0=N0(G0.start,F.width,4),KJ=N0(L0.start,F.width,4);if(G0.start<=h0+1&&m0===KJ&&N0(G0.start+G0.count-1,F.width,4)===m0)L0.count=Math.max(L0.count,G0.start+G0.count-L0.start);else++R0,U0[R0]=G0}U0.length=R0+1;let t=$.getParameter(J.UNPACK_ROW_LENGTH),$0=$.getParameter(J.UNPACK_SKIP_PIXELS),O0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,F.width);for(let S0=0,L0=U0.length;S0<L0;S0++){let G0=U0[S0],h0=Math.floor(G0.start/4),m0=Math.ceil(G0.count/4),KJ=h0%F.width,g=Math.floor(h0/F.width),V0=m0,W0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,KJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,g),$.texSubImage2D(J.TEXTURE_2D,0,KJ,g,V0,1,A,x,F.data)}D.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,t),$.pixelStorei(J.UNPACK_SKIP_PIXELS,$0),$.pixelStorei(J.UNPACK_SKIP_ROWS,O0)}}function k0(D,F,A){let x=J.TEXTURE_2D;if(F.isDataArrayTexture||F.isCompressedArrayTexture)x=J.TEXTURE_2D_ARRAY;if(F.isData3DTexture)x=J.TEXTURE_3D;let X0=Z0(D,F),U0=F.source;$.bindTexture(x,D.__webglTexture,J.TEXTURE0+A);let R0=K.get(U0);if(U0.version!==R0.__version||X0===!0){if($.activeTexture(J.TEXTURE0+A),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let W0=XJ.getPrimaries(XJ.workingColorSpace),M0=F.colorSpace===p9?null:XJ.getPrimaries(F.colorSpace),w0=F.colorSpace===p9||W0===M0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,F.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,w0)}$.pixelStorei(J.UNPACK_ALIGNMENT,F.unpackAlignment);let $0=E(F.image,!1,W.maxTextureSize);$0=e0(F,$0);let O0=Z.convert(F.format,F.colorSpace),S0=Z.convert(F.type),L0=M(F.internalFormat,O0,S0,F.normalized,F.colorSpace,F.isVideoTexture);B(x,F);let G0,h0=F.mipmaps,m0=F.isVideoTexture!==!0,KJ=R0.__version===void 0||X0===!0,g=U0.dataReady,V0=C(F,$0);if(F.isDepthTexture){if(L0=_(F.format===x9,F.type),KJ)if(m0)$.texStorage2D(J.TEXTURE_2D,1,L0,$0.width,$0.height);else $.texImage2D(J.TEXTURE_2D,0,L0,$0.width,$0.height,0,O0,S0,null)}else if(F.isDataTexture)if(h0.length>0){if(m0&&KJ)$.texStorage2D(J.TEXTURE_2D,V0,L0,h0[0].width,h0[0].height);for(let W0=0,M0=h0.length;W0<M0;W0++)if(G0=h0[W0],m0){if(g)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,G0.width,G0.height,O0,S0,G0.data)}else $.texImage2D(J.TEXTURE_2D,W0,L0,G0.width,G0.height,0,O0,S0,G0.data);F.generateMipmaps=!1}else if(m0){if(KJ)$.texStorage2D(J.TEXTURE_2D,V0,L0,$0.width,$0.height);if(g)F0(F,$0,O0,S0)}else $.texImage2D(J.TEXTURE_2D,0,L0,$0.width,$0.height,0,O0,S0,$0.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){if(m0&&KJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,V0,L0,h0[0].width,h0[0].height,$0.depth);for(let W0=0,M0=h0.length;W0<M0;W0++)if(G0=h0[W0],F.format!==x8)if(O0!==null)if(m0){if(g)if(F.layerUpdates.size>0){let w0=BK(G0.width,G0.height,F.format,F.type);for(let Y0 of F.layerUpdates){let E0=G0.data.subarray(Y0*w0/G0.data.BYTES_PER_ELEMENT,(Y0+1)*w0/G0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,Y0,G0.width,G0.height,1,O0,E0)}F.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,0,G0.width,G0.height,$0.depth,O0,G0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,W0,L0,G0.width,G0.height,$0.depth,0,G0.data,0,0);else u0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(g)$.texSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,0,G0.width,G0.height,$0.depth,O0,S0,G0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,W0,L0,G0.width,G0.height,$0.depth,0,O0,S0,G0.data)}else{if(m0&&KJ)$.texStorage2D(J.TEXTURE_2D,V0,L0,h0[0].width,h0[0].height);for(let W0=0,M0=h0.length;W0<M0;W0++)if(G0=h0[W0],F.format!==x8)if(O0!==null)if(m0){if(g)$.compressedTexSubImage2D(J.TEXTURE_2D,W0,0,0,G0.width,G0.height,O0,G0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,W0,L0,G0.width,G0.height,0,G0.data);else u0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(g)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,G0.width,G0.height,O0,S0,G0.data)}else $.texImage2D(J.TEXTURE_2D,W0,L0,G0.width,G0.height,0,O0,S0,G0.data)}else if(F.isDataArrayTexture)if(m0){if(KJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,V0,L0,$0.width,$0.height,$0.depth);if(g)if(F.layerUpdates.size>0){let W0=BK($0.width,$0.height,F.format,F.type);for(let M0 of F.layerUpdates){let w0=$0.data.subarray(M0*W0/$0.data.BYTES_PER_ELEMENT,(M0+1)*W0/$0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,M0,$0.width,$0.height,1,O0,S0,w0)}F.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,$0.width,$0.height,$0.depth,O0,S0,$0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,L0,$0.width,$0.height,$0.depth,0,O0,S0,$0.data);else if(F.isData3DTexture)if(m0){if(KJ)$.texStorage3D(J.TEXTURE_3D,V0,L0,$0.width,$0.height,$0.depth);if(g)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,$0.width,$0.height,$0.depth,O0,S0,$0.data)}else $.texImage3D(J.TEXTURE_3D,0,L0,$0.width,$0.height,$0.depth,0,O0,S0,$0.data);else if(F.isFramebufferTexture){if(KJ)if(m0)$.texStorage2D(J.TEXTURE_2D,V0,L0,$0.width,$0.height);else{let{width:W0,height:M0}=$0;for(let w0=0;w0<V0;w0++)$.texImage2D(J.TEXTURE_2D,w0,L0,W0,M0,0,O0,S0,null),W0>>=1,M0>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in J){let W0=J.canvas;if(!W0.hasAttribute("layoutsubtree"))W0.setAttribute("layoutsubtree","true");if($0.parentNode!==W0){W0.appendChild($0),O.add(F),W0.onpaint=(M0)=>{let w0=M0.changedElements;for(let Y0 of O)if(w0.includes(Y0.image))Y0.needsUpdate=!0},W0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,$0);else{let{RGBA:w0,RGBA:Y0,UNSIGNED_BYTE:E0}=J;J.texElementImage2D(J.TEXTURE_2D,0,w0,Y0,E0,$0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(h0.length>0){if(m0&&KJ){let W0=h(h0[0]);$.texStorage2D(J.TEXTURE_2D,V0,L0,W0.width,W0.height)}for(let W0=0,M0=h0.length;W0<M0;W0++)if(G0=h0[W0],m0){if(g)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,O0,S0,G0)}else $.texImage2D(J.TEXTURE_2D,W0,L0,O0,S0,G0);F.generateMipmaps=!1}else if(m0){if(KJ){let W0=h($0);$.texStorage2D(J.TEXTURE_2D,V0,L0,W0.width,W0.height)}if(g)$.texSubImage2D(J.TEXTURE_2D,0,0,0,O0,S0,$0)}else $.texImage2D(J.TEXTURE_2D,0,L0,O0,S0,$0);if(N(F))S(x);if(R0.__version=U0.version,F.onUpdate)F.onUpdate(F)}D.__version=F.version}function l0(D,F,A){if(F.image.length!==6)return;let x=Z0(D,F),X0=F.source;$.bindTexture(J.TEXTURE_CUBE_MAP,D.__webglTexture,J.TEXTURE0+A);let U0=K.get(X0);if(X0.version!==U0.__version||x===!0){$.activeTexture(J.TEXTURE0+A);let R0=XJ.getPrimaries(XJ.workingColorSpace),t=F.colorSpace===p9?null:XJ.getPrimaries(F.colorSpace),$0=F.colorSpace===p9||R0===t?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,F.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,F.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,$0);let O0=F.isCompressedTexture||F.image[0].isCompressedTexture,S0=F.image[0]&&F.image[0].isDataTexture,L0=[];for(let Y0=0;Y0<6;Y0++){if(!O0&&!S0)L0[Y0]=E(F.image[Y0],!0,W.maxCubemapSize);else L0[Y0]=S0?F.image[Y0].image:F.image[Y0];L0[Y0]=e0(F,L0[Y0])}let G0=L0[0],h0=Z.convert(F.format,F.colorSpace),m0=Z.convert(F.type),KJ=M(F.internalFormat,h0,m0,F.normalized,F.colorSpace),g=F.isVideoTexture!==!0,V0=U0.__version===void 0||x===!0,W0=X0.dataReady,M0=C(F,G0);B(J.TEXTURE_CUBE_MAP,F);let w0;if(O0){if(g&&V0)$.texStorage2D(J.TEXTURE_CUBE_MAP,M0,KJ,G0.width,G0.height);for(let Y0=0;Y0<6;Y0++){w0=L0[Y0].mipmaps;for(let E0=0;E0<w0.length;E0++){let a0=w0[E0];if(F.format!==x8)if(h0!==null)if(g){if(W0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,E0,0,0,a0.width,a0.height,h0,a0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,E0,KJ,a0.width,a0.height,0,a0.data);else u0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(g){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,E0,0,0,a0.width,a0.height,h0,m0,a0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,E0,KJ,a0.width,a0.height,0,h0,m0,a0.data)}}}else{if(w0=F.mipmaps,g&&V0){if(w0.length>0)M0++;let Y0=h(L0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,M0,KJ,Y0.width,Y0.height)}for(let Y0=0;Y0<6;Y0++)if(S0){if(g){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,L0[Y0].width,L0[Y0].height,h0,m0,L0[Y0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,KJ,L0[Y0].width,L0[Y0].height,0,h0,m0,L0[Y0].data);for(let E0=0;E0<w0.length;E0++){let AJ=w0[E0].image[Y0].image;if(g){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,E0+1,0,0,AJ.width,AJ.height,h0,m0,AJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,E0+1,KJ,AJ.width,AJ.height,0,h0,m0,AJ.data)}}else{if(g){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,h0,m0,L0[Y0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,KJ,h0,m0,L0[Y0]);for(let E0=0;E0<w0.length;E0++){let a0=w0[E0];if(g){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,E0+1,0,0,h0,m0,a0.image[Y0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,E0+1,KJ,h0,m0,a0.image[Y0])}}}if(N(F))S(J.TEXTURE_CUBE_MAP);if(U0.__version=X0.version,F.onUpdate)F.onUpdate(F)}D.__version=F.version}function C0(D,F,A,x,X0,U0){let R0=Z.convert(A.format,A.colorSpace),t=Z.convert(A.type),$0=M(A.internalFormat,R0,t,A.normalized,A.colorSpace),O0=K.get(F),S0=K.get(A);if(S0.__renderTarget=F,!O0.__hasExternalTextures){let L0=Math.max(1,F.width>>U0),G0=Math.max(1,F.height>>U0);if(X0===J.TEXTURE_3D||X0===J.TEXTURE_2D_ARRAY)$.texImage3D(X0,U0,$0,L0,G0,F.depth,0,R0,t,null);else $.texImage2D(X0,U0,$0,L0,G0,0,R0,t,null)}if($.bindFramebuffer(J.FRAMEBUFFER,D),b(F))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,x,X0,S0.__webglTexture,0,HJ(F));else if(X0===J.TEXTURE_2D||X0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&X0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,x,X0,S0.__webglTexture,U0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function b0(D,F,A){if(J.bindRenderbuffer(J.RENDERBUFFER,D),F.depthBuffer){let x=F.depthTexture,X0=x&&x.isDepthTexture?x.type:null,U0=_(F.stencilBuffer,X0),R0=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(b(F))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,HJ(F),U0,F.width,F.height);else if(A)J.renderbufferStorageMultisample(J.RENDERBUFFER,HJ(F),U0,F.width,F.height);else J.renderbufferStorage(J.RENDERBUFFER,U0,F.width,F.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,R0,J.RENDERBUFFER,D)}else{let x=F.textures;for(let X0=0;X0<x.length;X0++){let U0=x[X0],R0=Z.convert(U0.format,U0.colorSpace),t=Z.convert(U0.type),$0=M(U0.internalFormat,R0,t,U0.normalized,U0.colorSpace);if(b(F))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,HJ(F),$0,F.width,F.height);else if(A)J.renderbufferStorageMultisample(J.RENDERBUFFER,HJ(F),$0,F.width,F.height);else J.renderbufferStorage(J.RENDERBUFFER,$0,F.width,F.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function c0(D,F,A){let x=F.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,D),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X0=K.get(F.depthTexture);if(X0.__renderTarget=F,!X0.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0;if(x){if(X0.__webglInit===void 0)X0.__webglInit=!0,F.depthTexture.addEventListener("dispose",w);if(X0.__webglTexture===void 0){X0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,X0.__webglTexture),B(J.TEXTURE_CUBE_MAP,F.depthTexture);let O0=Z.convert(F.depthTexture.format),S0=Z.convert(F.depthTexture.type),L0;if(F.depthTexture.format===b9)L0=J.DEPTH_COMPONENT24;else if(F.depthTexture.format===x9)L0=J.DEPTH24_STENCIL8;for(let G0=0;G0<6;G0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+G0,0,L0,F.width,F.height,0,O0,S0,null)}}else y(F.depthTexture,0);let U0=X0.__webglTexture,R0=HJ(F),t=x?J.TEXTURE_CUBE_MAP_POSITIVE_X+A:J.TEXTURE_2D,$0=F.depthTexture.format===x9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(F.depthTexture.format===b9)if(b(F))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,$0,t,U0,0,R0);else J.framebufferTexture2D(J.FRAMEBUFFER,$0,t,U0,0);else if(F.depthTexture.format===x9)if(b(F))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,$0,t,U0,0,R0);else J.framebufferTexture2D(J.FRAMEBUFFER,$0,t,U0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function s0(D){let F=K.get(D),A=D.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==D.depthTexture){let x=D.depthTexture;if(F.__depthDisposeCallback)F.__depthDisposeCallback();if(x){let X0=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,x.removeEventListener("dispose",X0)};x.addEventListener("dispose",X0),F.__depthDisposeCallback=X0}F.__boundDepthTexture=x}if(D.depthTexture&&!F.__autoAllocateDepthBuffer)if(A)for(let x=0;x<6;x++)c0(F.__webglFramebuffer[x],D,x);else{let x=D.texture.mipmaps;if(x&&x.length>0)c0(F.__webglFramebuffer[0],D,0);else c0(F.__webglFramebuffer,D,0)}else if(A){F.__webglDepthbuffer=[];for(let x=0;x<6;x++)if($.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer[x]),F.__webglDepthbuffer[x]===void 0)F.__webglDepthbuffer[x]=J.createRenderbuffer(),b0(F.__webglDepthbuffer[x],D,!1);else{let X0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=F.__webglDepthbuffer[x];J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,U0)}}else{let x=D.texture.mipmaps;if(x&&x.length>0)$.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer);if(F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=J.createRenderbuffer(),b0(F.__webglDepthbuffer,D,!1);else{let X0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=F.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,U0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function x0(D,F,A){let x=K.get(D);if(F!==void 0)C0(x.__webglFramebuffer,D,D.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(A!==void 0)s0(D)}function UJ(D){let F=D.texture,A=K.get(D),x=K.get(F);D.addEventListener("dispose",k);let X0=D.textures,U0=D.isWebGLCubeRenderTarget===!0,R0=X0.length>1;if(!R0){if(x.__webglTexture===void 0)x.__webglTexture=J.createTexture();x.__version=F.version,X.memory.textures++}if(U0){A.__webglFramebuffer=[];for(let t=0;t<6;t++)if(F.mipmaps&&F.mipmaps.length>0){A.__webglFramebuffer[t]=[];for(let $0=0;$0<F.mipmaps.length;$0++)A.__webglFramebuffer[t][$0]=J.createFramebuffer()}else A.__webglFramebuffer[t]=J.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){A.__webglFramebuffer=[];for(let t=0;t<F.mipmaps.length;t++)A.__webglFramebuffer[t]=J.createFramebuffer()}else A.__webglFramebuffer=J.createFramebuffer();if(R0)for(let t=0,$0=X0.length;t<$0;t++){let O0=K.get(X0[t]);if(O0.__webglTexture===void 0)O0.__webglTexture=J.createTexture(),X.memory.textures++}if(D.samples>0&&b(D)===!1){A.__webglMultisampledFramebuffer=J.createFramebuffer(),A.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let t=0;t<X0.length;t++){let $0=X0[t];A.__webglColorRenderbuffer[t]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,A.__webglColorRenderbuffer[t]);let O0=Z.convert($0.format,$0.colorSpace),S0=Z.convert($0.type),L0=M($0.internalFormat,O0,S0,$0.normalized,$0.colorSpace,D.isXRRenderTarget===!0),G0=HJ(D);J.renderbufferStorageMultisample(J.RENDERBUFFER,G0,L0,D.width,D.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+t,J.RENDERBUFFER,A.__webglColorRenderbuffer[t])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),D.depthBuffer)A.__webglDepthRenderbuffer=J.createRenderbuffer(),b0(A.__webglDepthRenderbuffer,D,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(U0){$.bindTexture(J.TEXTURE_CUBE_MAP,x.__webglTexture),B(J.TEXTURE_CUBE_MAP,F);for(let t=0;t<6;t++)if(F.mipmaps&&F.mipmaps.length>0)for(let $0=0;$0<F.mipmaps.length;$0++)C0(A.__webglFramebuffer[t][$0],D,F,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,$0);else C0(A.__webglFramebuffer[t],D,F,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0);if(N(F))S(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(R0){for(let t=0,$0=X0.length;t<$0;t++){let O0=X0[t],S0=K.get(O0),L0=J.TEXTURE_2D;if(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)L0=D.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(L0,S0.__webglTexture),B(L0,O0),C0(A.__webglFramebuffer,D,O0,J.COLOR_ATTACHMENT0+t,L0,0),N(O0))S(L0)}$.unbindTexture()}else{let t=J.TEXTURE_2D;if(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)t=D.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(t,x.__webglTexture),B(t,F),F.mipmaps&&F.mipmaps.length>0)for(let $0=0;$0<F.mipmaps.length;$0++)C0(A.__webglFramebuffer[$0],D,F,J.COLOR_ATTACHMENT0,t,$0);else C0(A.__webglFramebuffer,D,F,J.COLOR_ATTACHMENT0,t,0);if(N(F))S(t);$.unbindTexture()}if(D.depthBuffer)s0(D)}function i0(D){let F=D.textures;for(let A=0,x=F.length;A<x;A++){let X0=F[A];if(N(X0)){let U0=P(D),R0=K.get(X0).__webglTexture;$.bindTexture(U0,R0),S(U0),$.unbindTexture()}}}let qJ=[],YJ=[];function GJ(D){if(D.samples>0){if(b(D)===!1){let{textures:F,width:A,height:x}=D,X0=J.COLOR_BUFFER_BIT,U0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,R0=K.get(D),t=F.length>1;if(t)for(let O0=0;O0<F.length;O0++)$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,R0.__webglMultisampledFramebuffer);let $0=D.texture.mipmaps;if($0&&$0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglFramebuffer);for(let O0=0;O0<F.length;O0++){if(D.resolveDepthBuffer){if(D.depthBuffer)X0|=J.DEPTH_BUFFER_BIT;if(D.stencilBuffer&&D.resolveStencilBuffer)X0|=J.STENCIL_BUFFER_BIT}if(t){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,R0.__webglColorRenderbuffer[O0]);let S0=K.get(F[O0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,S0,0)}if(J.blitFramebuffer(0,0,A,x,0,0,A,x,X0,J.NEAREST),H===!0){if(qJ.length=0,YJ.length=0,qJ.push(J.COLOR_ATTACHMENT0+O0),D.depthBuffer&&D.resolveDepthBuffer===!1)qJ.push(U0),YJ.push(U0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,YJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,qJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),t)for(let O0=0;O0<F.length;O0++){$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,R0.__webglColorRenderbuffer[O0]);let S0=K.get(F[O0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,S0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&H){let F=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[F])}}}function HJ(D){return Math.min(W.maxSamples,D.samples)}function b(D){let F=K.get(D);return D.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function gJ(D){let F=X.render.frame;if(G.get(D)!==F)G.set(D,F),D.update()}function e0(D,F){let{colorSpace:A,format:x,type:X0}=D;if(D.isCompressedTexture===!0||D.isVideoTexture===!0)return F;if(A!==c$&&A!==p9)if(XJ.getTransfer(A)===BJ){if(x!==x8||X0!==j8)u0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else n0("WebGLTextures: Unsupported texture color space:",A);return F}function h(D){if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement)U.width=D.naturalWidth||D.width,U.height=D.naturalHeight||D.height;else if(typeof VideoFrame<"u"&&D instanceof VideoFrame)U.width=D.displayWidth,U.height=D.displayHeight;else U.width=D.width,U.height=D.height;return U}this.allocateTextureUnit=Q0,this.resetTextureUnits=e,this.getTextureUnits=c,this.setTextureUnits=r,this.setTexture2D=y,this.setTexture2DArray=T,this.setTexture3D=f,this.setTextureCube=v,this.rebindTextures=x0,this.setupRenderTarget=UJ,this.updateRenderTargetMipmap=i0,this.updateMultisampleRenderTarget=GJ,this.setupDepthRenderbuffer=s0,this.setupFrameBufferTexture=C0,this.useMultisampledRTT=b,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function VN(J,Q){function $(K,W=p9){let Z,X=XJ.getTransfer(W);if(K===j8)return J.UNSIGNED_BYTE;if(K===U$)return J.UNSIGNED_SHORT_4_4_4_4;if(K===q$)return J.UNSIGNED_SHORT_5_5_5_1;if(K===eW)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===JZ)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===rW)return J.BYTE;if(K===tW)return J.SHORT;if(K===n7)return J.UNSIGNED_SHORT;if(K===H$)return J.INT;if(K===k9)return J.UNSIGNED_INT;if(K===e8)return J.FLOAT;if(K===J9)return J.HALF_FLOAT;if(K===QZ)return J.ALPHA;if(K===$Z)return J.RGB;if(K===x8)return J.RGBA;if(K===b9)return J.DEPTH_COMPONENT;if(K===x9)return J.DEPTH_STENCIL;if(K===KZ)return J.RED;if(K===N$)return J.RED_INTEGER;if(K===g9)return J.RG;if(K===G$)return J.RG_INTEGER;if(K===F$)return J.RGBA_INTEGER;if(K===u6||K===l6||K===c6||K===n6)if(X===BJ)if(Z=Q.get("WEBGL_compressed_texture_s3tc_srgb"),Z!==null){if(K===u6)return Z.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===l6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===c6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===n6)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Z=Q.get("WEBGL_compressed_texture_s3tc"),Z!==null){if(K===u6)return Z.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===l6)return Z.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===c6)return Z.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===n6)return Z.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===O$||K===D$||K===E$||K===R$)if(Z=Q.get("WEBGL_compressed_texture_pvrtc"),Z!==null){if(K===O$)return Z.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===D$)return Z.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===E$)return Z.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===R$)return Z.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===k$||K===V$||K===M$||K===L$||K===B$||K===s6||K===z$)if(Z=Q.get("WEBGL_compressed_texture_etc"),Z!==null){if(K===k$||K===V$)return X===BJ?Z.COMPRESSED_SRGB8_ETC2:Z.COMPRESSED_RGB8_ETC2;if(K===M$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Z.COMPRESSED_RGBA8_ETC2_EAC;if(K===L$)return Z.COMPRESSED_R11_EAC;if(K===B$)return Z.COMPRESSED_SIGNED_R11_EAC;if(K===s6)return Z.COMPRESSED_RG11_EAC;if(K===z$)return Z.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===I$||K===P$||K===A$||K===w$||K===_$||K===C$||K===T$||K===S$||K===j$||K===y$||K===v$||K===h$||K===f$||K===b$)if(Z=Q.get("WEBGL_compressed_texture_astc"),Z!==null){if(K===I$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Z.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===P$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Z.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===A$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Z.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===w$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Z.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===_$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Z.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===C$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Z.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===T$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Z.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===S$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Z.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===j$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Z.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===y$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Z.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===v$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Z.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===h$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Z.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===f$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Z.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===b$)return X===BJ?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Z.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===x$||K===g$||K===p$)if(Z=Q.get("EXT_texture_compression_bptc"),Z!==null){if(K===x$)return X===BJ?Z.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Z.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===g$)return Z.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===p$)return Z.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===m$||K===d$||K===i6||K===u$)if(Z=Q.get("EXT_texture_compression_rgtc"),Z!==null){if(K===m$)return Z.COMPRESSED_RED_RGTC1_EXT;if(K===d$)return Z.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===i6)return Z.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===u$)return Z.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===R7)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:$}}var MN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new ZQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new U8({vertexShader:MN,fragmentShader:LN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new K0(new p8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $X extends g8{constructor(J,Q){super();let $=this,K=null,W=1,Z=null,X="local-floor",Y=1,H=null,U=null,G=null,O=null,q=null,R=null,V=typeof XRWebGLBinding<"u",I=new QX,E={},N=Q.getContextAttributes(),S=null,P=null,M=[],_=[],C=new p0,w=null,k=new sJ;k.viewport=new TJ;let z=new sJ;z.viewport=new TJ;let o=[k,z],j=new kK,l=null,e=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z0=M[B];if(Z0===void 0)Z0=new i7,M[B]=Z0;return Z0.getTargetRaySpace()},this.getControllerGrip=function(B){let Z0=M[B];if(Z0===void 0)Z0=new i7,M[B]=Z0;return Z0.getGripSpace()},this.getHand=function(B){let Z0=M[B];if(Z0===void 0)Z0=new i7,M[B]=Z0;return Z0.getHandSpace()};function c(B){let Z0=_.indexOf(B.inputSource);if(Z0===-1)return;let N0=M[Z0];if(N0!==void 0)N0.update(B.inputSource,B.frame,H||Z),N0.dispatchEvent({type:B.type,data:B.inputSource})}function r(){K.removeEventListener("select",c),K.removeEventListener("selectstart",c),K.removeEventListener("selectend",c),K.removeEventListener("squeeze",c),K.removeEventListener("squeezestart",c),K.removeEventListener("squeezeend",c),K.removeEventListener("end",r),K.removeEventListener("inputsourceschange",Q0);for(let B=0;B<M.length;B++){let Z0=_[B];if(Z0===null)continue;_[B]=null,M[B].disconnect(Z0)}l=null,e=null,I.reset();for(let B in E)delete E[B];J.setRenderTarget(S),q=null,O=null,G=null,K=null,P=null,i.stop(),$.isPresenting=!1,J.setPixelRatio(w),J.setSize(C.width,C.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){if(W=B,$.isPresenting===!0)u0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){if(X=B,$.isPresenting===!0)u0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||Z},this.setReferenceSpace=function(B){H=B},this.getBaseLayer=function(){return O!==null?O:q},this.getBinding=function(){if(G===null&&V)G=new XRWebGLBinding(K,Q);return G},this.getFrame=function(){return R},this.getSession=function(){return K},this.setSession=async function(B){if(K=B,K!==null){if(S=J.getRenderTarget(),K.addEventListener("select",c),K.addEventListener("selectstart",c),K.addEventListener("selectend",c),K.addEventListener("squeeze",c),K.addEventListener("squeezestart",c),K.addEventListener("squeezeend",c),K.addEventListener("end",r),K.addEventListener("inputsourceschange",Q0),N.xrCompatible!==!0)await Q.makeXRCompatible();if(w=J.getPixelRatio(),J.getSize(C),!(V&&("createProjectionLayer"in XRWebGLBinding.prototype))){let N0={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(K,Q,N0),K.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),P=new B8(q.framebufferWidth,q.framebufferHeight,{format:x8,type:j8,colorSpace:J.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let N0=null,F0=null,k0=null;if(N.depth)k0=N.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,N0=N.stencil?x9:b9,F0=N.stencil?R7:k9;let l0={colorFormat:Q.RGBA8,depthFormat:k0,scaleFactor:W};G=this.getBinding(),O=G.createProjectionLayer(l0),K.updateRenderState({layers:[O]}),J.setPixelRatio(1),J.setSize(O.textureWidth,O.textureHeight,!1),P=new B8(O.textureWidth,O.textureHeight,{format:x8,type:j8,depthTexture:new M9(O.textureWidth,O.textureHeight,F0,void 0,void 0,void 0,void 0,void 0,void 0,N0),stencilBuffer:N.stencil,colorSpace:J.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:O.ignoreDepthValues===!1,resolveStencilBuffer:O.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(Y),H=null,Z=await K.requestReferenceSpace(X),i.setContext(K),i.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function Q0(B){for(let Z0=0;Z0<B.removed.length;Z0++){let N0=B.removed[Z0],F0=_.indexOf(N0);if(F0>=0)_[F0]=null,M[F0].disconnect(N0)}for(let Z0=0;Z0<B.added.length;Z0++){let N0=B.added[Z0],F0=_.indexOf(N0);if(F0===-1){for(let l0=0;l0<M.length;l0++)if(l0>=_.length){_.push(N0),F0=l0;break}else if(_[l0]===null){_[l0]=N0,F0=l0;break}if(F0===-1)break}let k0=M[F0];if(k0)k0.connect(N0)}}let u=new p,y=new p;function T(B,Z0,N0){u.setFromMatrixPosition(Z0.matrixWorld),y.setFromMatrixPosition(N0.matrixWorld);let F0=u.distanceTo(y),k0=Z0.projectionMatrix.elements,l0=N0.projectionMatrix.elements,C0=k0[14]/(k0[10]-1),b0=k0[14]/(k0[10]+1),c0=(k0[9]+1)/k0[5],s0=(k0[9]-1)/k0[5],x0=(k0[8]-1)/k0[0],UJ=(l0[8]+1)/l0[0],i0=C0*x0,qJ=C0*UJ,YJ=F0/(-x0+UJ),GJ=YJ*-x0;if(Z0.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(GJ),B.translateZ(YJ),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),k0[10]===-1)B.projectionMatrix.copy(Z0.projectionMatrix),B.projectionMatrixInverse.copy(Z0.projectionMatrixInverse);else{let HJ=C0+YJ,b=b0+YJ,gJ=i0-GJ,e0=qJ+(F0-GJ),h=c0*b0/b*HJ,D=s0*b0/b*HJ;B.projectionMatrix.makePerspective(gJ,e0,h,D,HJ,b),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function f(B,Z0){if(Z0===null)B.matrixWorld.copy(B.matrix);else B.matrixWorld.multiplyMatrices(Z0.matrixWorld,B.matrix);B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(K===null)return;let{near:Z0,far:N0}=B;if(I.texture!==null){if(I.depthNear>0)Z0=I.depthNear;if(I.depthFar>0)N0=I.depthFar}if(j.near=z.near=k.near=Z0,j.far=z.far=k.far=N0,l!==j.near||e!==j.far)K.updateRenderState({depthNear:j.near,depthFar:j.far}),l=j.near,e=j.far;j.layers.mask=B.layers.mask|6,k.layers.mask=j.layers.mask&-5,z.layers.mask=j.layers.mask&-3;let F0=B.parent,k0=j.cameras;f(j,F0);for(let l0=0;l0<k0.length;l0++)f(k0[l0],F0);if(k0.length===2)T(j,k,z);else j.projectionMatrix.copy(k.projectionMatrix);v(B,j,F0)};function v(B,Z0,N0){if(N0===null)B.matrix.copy(Z0.matrixWorld);else B.matrix.copy(N0.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z0.matrixWorld);if(B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z0.projectionMatrix),B.projectionMatrixInverse.copy(Z0.projectionMatrixInverse),B.isPerspectiveCamera)B.fov=y9*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1}this.getCamera=function(){return j},this.getFoveation=function(){if(O===null&&q===null)return;return Y},this.setFoveation=function(B){if(Y=B,O!==null)O.fixedFoveation=B;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=B},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(j)},this.getCameraTexture=function(B){return E[B]};let d=null;function J0(B,Z0){if(U=Z0.getViewerPose(H||Z),R=Z0,U!==null){let N0=U.views;if(q!==null)J.setRenderTargetFramebuffer(P,q.framebuffer),J.setRenderTarget(P);let F0=!1;if(N0.length!==j.cameras.length)j.cameras.length=0,F0=!0;for(let b0=0;b0<N0.length;b0++){let c0=N0[b0],s0=null;if(q!==null)s0=q.getViewport(c0);else{let UJ=G.getViewSubImage(O,c0);if(s0=UJ.viewport,b0===0)J.setRenderTargetTextures(P,UJ.colorTexture,UJ.depthStencilTexture),J.setRenderTarget(P)}let x0=o[b0];if(x0===void 0)x0=new sJ,x0.layers.enable(b0),x0.viewport=new TJ,o[b0]=x0;if(x0.matrix.fromArray(c0.transform.matrix),x0.matrix.decompose(x0.position,x0.quaternion,x0.scale),x0.projectionMatrix.fromArray(c0.projectionMatrix),x0.projectionMatrixInverse.copy(x0.projectionMatrix).invert(),x0.viewport.set(s0.x,s0.y,s0.width,s0.height),b0===0)j.matrix.copy(x0.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);if(F0===!0)j.cameras.push(x0)}let k0=K.enabledFeatures;if(k0&&k0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&V){G=$.getBinding();let b0=G.getDepthInformation(N0[0]);if(b0&&b0.isValid&&b0.texture)I.init(b0,K.renderState)}if(k0&&k0.includes("camera-access")&&V){J.state.unbindTexture(),G=$.getBinding();for(let b0=0;b0<N0.length;b0++){let c0=N0[b0].camera;if(c0){let s0=E[c0];if(!s0)s0=new ZQ,E[c0]=s0;let x0=G.getCameraImage(c0);s0.sourceTexture=x0}}}}for(let N0=0;N0<M.length;N0++){let F0=_[N0],k0=M[N0];if(F0!==null&&k0!==void 0)k0.update(F0,Z0,H||Z)}if(d)d(B,Z0);if(Z0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Z0});R=null}let i=new lZ;i.setAnimationLoop(J0),this.setAnimationLoop=function(B){d=B},this.dispose=function(){}}}var BN=new wJ,KX=new r0;KX.set(-1,0,0,0,1,0,0,0,1);function zN(J,Q){function $(E,N){if(E.matrixAutoUpdate===!0)E.updateMatrix();N.value.copy(E.matrix)}function K(E,N){if(N.color.getRGB(E.fogColor.value,KK(J)),N.isFog)E.fogNear.value=N.near,E.fogFar.value=N.far;else if(N.isFogExp2)E.fogDensity.value=N.density}function W(E,N,S,P,M){if(N.isNodeMaterial)N.uniformsNeedUpdate=!1;else if(N.isMeshBasicMaterial)Z(E,N);else if(N.isMeshLambertMaterial){if(Z(E,N),N.envMap)E.envMapIntensity.value=N.envMapIntensity}else if(N.isMeshToonMaterial)Z(E,N),O(E,N);else if(N.isMeshPhongMaterial){if(Z(E,N),G(E,N),N.envMap)E.envMapIntensity.value=N.envMapIntensity}else if(N.isMeshStandardMaterial){if(Z(E,N),q(E,N),N.isMeshPhysicalMaterial)R(E,N,M)}else if(N.isMeshMatcapMaterial)Z(E,N),V(E,N);else if(N.isMeshDepthMaterial)Z(E,N);else if(N.isMeshDistanceMaterial)Z(E,N),I(E,N);else if(N.isMeshNormalMaterial)Z(E,N);else if(N.isLineBasicMaterial){if(X(E,N),N.isLineDashedMaterial)Y(E,N)}else if(N.isPointsMaterial)H(E,N,S,P);else if(N.isSpriteMaterial)U(E,N);else if(N.isShadowMaterial)E.color.value.copy(N.color),E.opacity.value=N.opacity;else if(N.isShaderMaterial)N.uniformsNeedUpdate=!1}function Z(E,N){if(E.opacity.value=N.opacity,N.color)E.diffuse.value.copy(N.color);if(N.emissive)E.emissive.value.copy(N.emissive).multiplyScalar(N.emissiveIntensity);if(N.map)E.map.value=N.map,$(N.map,E.mapTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.bumpMap){if(E.bumpMap.value=N.bumpMap,$(N.bumpMap,E.bumpMapTransform),E.bumpScale.value=N.bumpScale,N.side===tJ)E.bumpScale.value*=-1}if(N.normalMap){if(E.normalMap.value=N.normalMap,$(N.normalMap,E.normalMapTransform),E.normalScale.value.copy(N.normalScale),N.side===tJ)E.normalScale.value.negate()}if(N.displacementMap)E.displacementMap.value=N.displacementMap,$(N.displacementMap,E.displacementMapTransform),E.displacementScale.value=N.displacementScale,E.displacementBias.value=N.displacementBias;if(N.emissiveMap)E.emissiveMap.value=N.emissiveMap,$(N.emissiveMap,E.emissiveMapTransform);if(N.specularMap)E.specularMap.value=N.specularMap,$(N.specularMap,E.specularMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest;let S=Q.get(N),P=S.envMap,M=S.envMapRotation;if(P){if(E.envMap.value=P,E.envMapRotation.value.setFromMatrix4(BN.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(KX);E.reflectivity.value=N.reflectivity,E.ior.value=N.ior,E.refractionRatio.value=N.refractionRatio}if(N.lightMap)E.lightMap.value=N.lightMap,E.lightMapIntensity.value=N.lightMapIntensity,$(N.lightMap,E.lightMapTransform);if(N.aoMap)E.aoMap.value=N.aoMap,E.aoMapIntensity.value=N.aoMapIntensity,$(N.aoMap,E.aoMapTransform)}function X(E,N){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,N.map)E.map.value=N.map,$(N.map,E.mapTransform)}function Y(E,N){E.dashSize.value=N.dashSize,E.totalSize.value=N.dashSize+N.gapSize,E.scale.value=N.scale}function H(E,N,S,P){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,E.size.value=N.size*S,E.scale.value=P*0.5,N.map)E.map.value=N.map,$(N.map,E.uvTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest}function U(E,N){if(E.diffuse.value.copy(N.color),E.opacity.value=N.opacity,E.rotation.value=N.rotation,N.map)E.map.value=N.map,$(N.map,E.mapTransform);if(N.alphaMap)E.alphaMap.value=N.alphaMap,$(N.alphaMap,E.alphaMapTransform);if(N.alphaTest>0)E.alphaTest.value=N.alphaTest}function G(E,N){E.specular.value.copy(N.specular),E.shininess.value=Math.max(N.shininess,0.0001)}function O(E,N){if(N.gradientMap)E.gradientMap.value=N.gradientMap}function q(E,N){if(E.metalness.value=N.metalness,N.metalnessMap)E.metalnessMap.value=N.metalnessMap,$(N.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=N.roughness,N.roughnessMap)E.roughnessMap.value=N.roughnessMap,$(N.roughnessMap,E.roughnessMapTransform);if(N.envMap)E.envMapIntensity.value=N.envMapIntensity}function R(E,N,S){if(E.ior.value=N.ior,N.sheen>0){if(E.sheenColor.value.copy(N.sheenColor).multiplyScalar(N.sheen),E.sheenRoughness.value=N.sheenRoughness,N.sheenColorMap)E.sheenColorMap.value=N.sheenColorMap,$(N.sheenColorMap,E.sheenColorMapTransform);if(N.sheenRoughnessMap)E.sheenRoughnessMap.value=N.sheenRoughnessMap,$(N.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(N.clearcoat>0){if(E.clearcoat.value=N.clearcoat,E.clearcoatRoughness.value=N.clearcoatRoughness,N.clearcoatMap)E.clearcoatMap.value=N.clearcoatMap,$(N.clearcoatMap,E.clearcoatMapTransform);if(N.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=N.clearcoatRoughnessMap,$(N.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(N.clearcoatNormalMap){if(E.clearcoatNormalMap.value=N.clearcoatNormalMap,$(N.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(N.clearcoatNormalScale),N.side===tJ)E.clearcoatNormalScale.value.negate()}}if(N.dispersion>0)E.dispersion.value=N.dispersion;if(N.iridescence>0){if(E.iridescence.value=N.iridescence,E.iridescenceIOR.value=N.iridescenceIOR,E.iridescenceThicknessMinimum.value=N.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=N.iridescenceThicknessRange[1],N.iridescenceMap)E.iridescenceMap.value=N.iridescenceMap,$(N.iridescenceMap,E.iridescenceMapTransform);if(N.iridescenceThicknessMap)E.iridescenceThicknessMap.value=N.iridescenceThicknessMap,$(N.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(N.transmission>0){if(E.transmission.value=N.transmission,E.transmissionSamplerMap.value=S.texture,E.transmissionSamplerSize.value.set(S.width,S.height),N.transmissionMap)E.transmissionMap.value=N.transmissionMap,$(N.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=N.thickness,N.thicknessMap)E.thicknessMap.value=N.thicknessMap,$(N.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=N.attenuationDistance,E.attenuationColor.value.copy(N.attenuationColor)}if(N.anisotropy>0){if(E.anisotropyVector.value.set(N.anisotropy*Math.cos(N.anisotropyRotation),N.anisotropy*Math.sin(N.anisotropyRotation)),N.anisotropyMap)E.anisotropyMap.value=N.anisotropyMap,$(N.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=N.specularIntensity,E.specularColor.value.copy(N.specularColor),N.specularColorMap)E.specularColorMap.value=N.specularColorMap,$(N.specularColorMap,E.specularColorMapTransform);if(N.specularIntensityMap)E.specularIntensityMap.value=N.specularIntensityMap,$(N.specularIntensityMap,E.specularIntensityMapTransform)}function V(E,N){if(N.matcap)E.matcap.value=N.matcap}function I(E,N){let S=Q.get(N).light;E.referencePosition.value.setFromMatrixPosition(S.matrixWorld),E.nearDistance.value=S.shadow.camera.near,E.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:W}}function IN(J,Q,$,K){let W={},Z={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(M,_){let C=_.program;K.uniformBlockBinding(M,C)}function U(M,_){let C=W[M.id];if(C===void 0)E(M),C=G(M),W[M.id]=C,M.addEventListener("dispose",S);let w=_.program;K.updateUBOMapping(M,w);let k=Q.render.frame;if(Z[M.id]!==k)q(M),Z[M.id]=k}function G(M){let _=O();M.__bindingPointIndex=_;let C=J.createBuffer(),w=M.__size,k=M.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,w,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,_,C),C}function O(){for(let M=0;M<Y;M++)if(X.indexOf(M)===-1)return X.push(M),M;return n0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(M){let _=W[M.id],C=M.uniforms,w=M.__cache;J.bindBuffer(J.UNIFORM_BUFFER,_);for(let k=0,z=C.length;k<z;k++){let o=C[k];if(Array.isArray(o))for(let j=0,l=o.length;j<l;j++)R(o[j],k,j,w);else R(o,k,0,w)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function R(M,_,C,w){if(I(M,_,C,w)===!0){let{__offset:k,value:z}=M;if(Array.isArray(z)){let o=0;for(let j=0;j<z.length;j++){let l=z[j],e=N(l);if(V(l,M.__data,o),typeof l!=="number"&&typeof l!=="boolean"&&!l.isMatrix3&&!ArrayBuffer.isView(l))o+=e.storage/Float32Array.BYTES_PER_ELEMENT}}else V(z,M.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,k,M.__data)}}function V(M,_,C){if(typeof M==="number"||typeof M==="boolean")_[0]=M;else if(M.isMatrix3)_[0]=M.elements[0],_[1]=M.elements[1],_[2]=M.elements[2],_[3]=0,_[4]=M.elements[3],_[5]=M.elements[4],_[6]=M.elements[5],_[7]=0,_[8]=M.elements[6],_[9]=M.elements[7],_[10]=M.elements[8],_[11]=0;else if(ArrayBuffer.isView(M))_.set(new M.constructor(M.buffer,M.byteOffset,_.length));else M.toArray(_,C)}function I(M,_,C,w){let k=M.value,z=_+"_"+C;if(w[z]===void 0){if(typeof k==="number"||typeof k==="boolean")w[z]=k;else if(ArrayBuffer.isView(k))w[z]=k.slice();else w[z]=k.clone();return!0}else{let o=w[z];if(typeof k==="number"||typeof k==="boolean"){if(o!==k)return w[z]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(o.equals(k)===!1)return o.copy(k),!0}return!1}function E(M){let _=M.uniforms,C=0,w=16;for(let z=0,o=_.length;z<o;z++){let j=Array.isArray(_[z])?_[z]:[_[z]];for(let l=0,e=j.length;l<e;l++){let c=j[l],r=Array.isArray(c.value)?c.value:[c.value];for(let Q0=0,u=r.length;Q0<u;Q0++){let y=r[Q0],T=N(y),f=C%w,v=f%T.boundary,d=f+v;if(C+=v,d!==0&&w-d<T.storage)C+=w-d;c.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),c.__offset=C,C+=T.storage}}}let k=C%w;if(k>0)C+=w-k;return M.__size=C,M.__cache={},this}function N(M){let _={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")_.boundary=4,_.storage=4;else if(M.isVector2)_.boundary=8,_.storage=8;else if(M.isVector3||M.isColor)_.boundary=16,_.storage=12;else if(M.isVector4)_.boundary=16,_.storage=16;else if(M.isMatrix3)_.boundary=48,_.storage=48;else if(M.isMatrix4)_.boundary=64,_.storage=64;else if(M.isTexture)u0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(M))_.boundary=16,_.storage=M.byteLength;else u0("WebGLRenderer: Unsupported uniform value type.",M);return _}function S(M){let _=M.target;_.removeEventListener("dispose",S);let C=X.indexOf(_.__bindingPointIndex);X.splice(C,1),J.deleteBuffer(W[_.id]),delete W[_.id],delete Z[_.id]}function P(){for(let M in W)J.deleteBuffer(W[M]);X=[],W={},Z={}}return{bind:H,update:U,dispose:P}}var PN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),d8=null;function AN(){if(d8===null)d8=new QK(PN,16,16,g9,J9),d8.name="DFG_LUT",d8.minFilter=H8,d8.magFilter=H8,d8.wrapS=m6,d8.wrapT=m6,d8.generateMipmaps=!1,d8.needsUpdate=!0;return d8}class yK{constructor(J={}){let{canvas:Q=NZ(),context:$=null,depth:K=!0,stencil:W=!1,alpha:Z=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:O=!1,outputBufferType:q=j8}=J;this.isWebGLRenderer=!0;let R;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=$.getContextAttributes().alpha}else R=Z;let V=q,I=new Set([F$,G$,N$]),E=new Set([j8,k9,n7,R7,U$,q$]),N=new Uint32Array(4),S=new Int32Array(4),P=new p,M=null,_=null,C=[],w=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=S8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,o=!1,j=null,l=null,e=null,c=null;this._outputColorSpace=o6;let r=0,Q0=0,u=null,y=-1,T=null,f=new TJ,v=new TJ,d=null,J0=new t0(0),i=0,B=Q.width,Z0=Q.height,N0=1,F0=null,k0=null,l0=new TJ(0,0,B,Z0),C0=new TJ(0,0,B,Z0),b0=!1,c0=new a7,s0=!1,x0=!1,UJ=new wJ,i0=new p,qJ=new TJ,YJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},GJ=!1;function HJ(){return u===null?N0:1}let b=$;function gJ(L,m){return Q.getContext(L,m)}try{let L={alpha:!0,depth:K,stencil:W,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${DW}`);if(Q.addEventListener("webglcontextlost",a0,!1),Q.addEventListener("webglcontextrestored",AJ,!1),Q.addEventListener("webglcontextcreationerror",OJ,!1),b===null){if(b=gJ("webgl2",L),b===null)if(gJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw n0("WebGLRenderer: "+L.message),L}let e0,h,D,F,A,x,X0,U0,R0,t,$0,O0,S0,L0,G0,h0,m0,KJ,g,V0,W0,M0,w0;function Y0(){if(e0=new yU(b),e0.init(),W0=new VN(b,e0),h=new PU(b,e0,J,W0),D=new RN(b,e0),h.reversedDepthBuffer&&O)D.buffers.depth.setReversed(!0);l=b.createFramebuffer(),e=b.createFramebuffer(),c=b.createFramebuffer(),F=new fU(b),A=new KN,x=new kN(b,e0,D,A,h,W0,F),X0=new jU(z),U0=new pY(b),M0=new zU(b,U0),R0=new vU(b,U0,F,M0),t=new xU(b,R0,U0,M0,F),KJ=new bU(b,h,x),G0=new AU(A),$0=new $N(z,X0,e0,h,M0,G0),O0=new zN(z,A),S0=new ZN,L0=new NN(e0),m0=new BU(z,X0,D,t,R,Y),h0=new EN(z,t,h),w0=new IN(b,F,h,D),g=new IU(b,e0,F),V0=new hU(b,e0,F),F.programs=$0.programs,z.capabilities=h,z.extensions=e0,z.properties=A,z.renderLists=S0,z.shadowMap=h0,z.state=D,z.info=F}if(Y0(),V!==j8)k=new pU(V,Q.width,Q.height,X,K,W);let E0=new $X(z,b);this.xr=E0,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let L=e0.get("WEBGL_lose_context");if(L)L.loseContext()},this.forceContextRestore=function(){let L=e0.get("WEBGL_lose_context");if(L)L.restoreContext()},this.getPixelRatio=function(){return N0},this.setPixelRatio=function(L){if(L===void 0)return;N0=L,this.setSize(B,Z0,!1)},this.getSize=function(L){return L.set(B,Z0)},this.setSize=function(L,m,a=!0){if(E0.isPresenting){u0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(B=L,Z0=m,Q.width=Math.floor(L*N0),Q.height=Math.floor(m*N0),a===!0)Q.style.width=L+"px",Q.style.height=m+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,L,m)},this.getDrawingBufferSize=function(L){return L.set(B*N0,Z0*N0).floor()},this.setDrawingBufferSize=function(L,m,a){B=L,Z0=m,N0=a,Q.width=Math.floor(L*a),Q.height=Math.floor(m*a),this.setViewport(0,0,L,m)},this.setEffects=function(L){if(V===j8){n0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let m=0;m<L.length;m++)if(L[m].isOutputPass===!0){u0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(f)},this.getViewport=function(L){return L.copy(l0)},this.setViewport=function(L,m,a,s){if(L.isVector4)l0.set(L.x,L.y,L.z,L.w);else l0.set(L,m,a,s);D.viewport(f.copy(l0).multiplyScalar(N0).round())},this.getScissor=function(L){return L.copy(C0)},this.setScissor=function(L,m,a,s){if(L.isVector4)C0.set(L.x,L.y,L.z,L.w);else C0.set(L,m,a,s);D.scissor(v.copy(C0).multiplyScalar(N0).round())},this.getScissorTest=function(){return b0},this.setScissorTest=function(L){D.setScissorTest(b0=L)},this.setOpaqueSort=function(L){F0=L},this.setTransparentSort=function(L){k0=L},this.getClearColor=function(L){return L.copy(m0.getClearColor())},this.setClearColor=function(){m0.setClearColor(...arguments)},this.getClearAlpha=function(){return m0.getClearAlpha()},this.setClearAlpha=function(){m0.setClearAlpha(...arguments)},this.clear=function(L=!0,m=!0,a=!0){let s=0;if(L){let n=!1;if(u!==null){let I0=u.texture.format;n=I.has(I0)}if(n){let I0=u.texture.type,T0=E.has(I0),B0=m0.getClearColor(),j0=m0.getClearAlpha(),y0=B0.r,o0=B0.g,JJ=B0.b;if(T0)N[0]=y0,N[1]=o0,N[2]=JJ,N[3]=j0,b.clearBufferuiv(b.COLOR,0,N);else S[0]=y0,S[1]=o0,S[2]=JJ,S[3]=j0,b.clearBufferiv(b.COLOR,0,S)}else s|=b.COLOR_BUFFER_BIT}if(m)s|=b.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(a)s|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(s!==0)b.clear(s)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),j=L},this.dispose=function(){Q.removeEventListener("webglcontextlost",a0,!1),Q.removeEventListener("webglcontextrestored",AJ,!1),Q.removeEventListener("webglcontextcreationerror",OJ,!1),m0.dispose(),S0.dispose(),L0.dispose(),A.dispose(),X0.dispose(),t.dispose(),M0.dispose(),w0.dispose(),$0.dispose(),E0.dispose(),E0.removeEventListener("sessionstart",I9),E0.removeEventListener("sessionend",P9),c8.stop()};function a0(L){L.preventDefault(),o$("WebGLRenderer: Context Lost."),o=!0}function AJ(){o$("WebGLRenderer: Context Restored."),o=!1;let L=F.autoReset,m=h0.enabled,a=h0.autoUpdate,s=h0.needsUpdate,n=h0.type;Y0(),F.autoReset=L,h0.enabled=m,h0.autoUpdate=a,h0.needsUpdate=s,h0.type=n}function OJ(L){n0("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Z8(L){let m=L.target;m.removeEventListener("dispose",Z8),N8(m)}function N8(L){l8(L),A.remove(L)}function l8(L){let m=A.get(L).programs;if(m!==void 0){if(m.forEach(function(a){$0.releaseProgram(a)}),L.isShaderMaterial)$0.releaseShaderCache(L)}}this.renderBufferDirect=function(L,m,a,s,n,I0){if(m===null)m=YJ;let T0=n.isMesh&&n.matrixWorld.determinantAffine()<0,B0=zQ(L,m,a,s,n);D.setMaterial(s,T0);let j0=a.index,y0=1;if(s.wireframe===!0){if(j0=R0.getWireframeAttribute(a),j0===void 0)return;y0=2}let o0=a.drawRange,JJ=a.attributes.position,f0=o0.start*y0,NJ=(o0.start+o0.count)*y0;if(I0!==null)f0=Math.max(f0,I0.start*y0),NJ=Math.min(NJ,(I0.start+I0.count)*y0);if(j0!==null)f0=Math.max(f0,0),NJ=Math.min(NJ,j0.count);else if(JJ!==void 0&&JJ!==null)f0=Math.max(f0,0),NJ=Math.min(NJ,JJ.count);let MJ=NJ-f0;if(MJ<0||MJ===1/0)return;M0.setup(n,s,B0,a,j0);let LJ,DJ=g;if(j0!==null)LJ=U0.get(j0),DJ=V0,DJ.setIndex(LJ);if(n.isMesh)if(s.wireframe===!0)D.setLineWidth(s.wireframeLinewidth*HJ()),DJ.setMode(b.LINES);else DJ.setMode(b.TRIANGLES);else if(n.isLine){let lJ=s.linewidth;if(lJ===void 0)lJ=1;if(D.setLineWidth(lJ*HJ()),n.isLineSegments)DJ.setMode(b.LINES);else if(n.isLineLoop)DJ.setMode(b.LINE_LOOP);else DJ.setMode(b.LINE_STRIP)}else if(n.isPoints)DJ.setMode(b.POINTS);else if(n.isSprite)DJ.setMode(b.TRIANGLES);if(n.isBatchedMesh)if(!e0.get("WEBGL_multi_draw")){let{_multiDrawStarts:lJ,_multiDrawCounts:_0,_multiDrawCount:X8}=n,WJ=j0?U0.get(j0).bytesPerElement:1,Y8=A.get(s).currentProgram.getUniforms();for(let E8=0;E8<X8;E8++)Y8.setValue(b,"_gl_DrawID",E8),DJ.render(lJ[E8]/WJ,_0[E8])}else DJ.renderMultiDraw(n._multiDrawStarts,n._multiDrawCounts,n._multiDrawCount);else if(n.isInstancedMesh)DJ.renderInstances(f0,MJ,n.count);else if(a.isInstancedBufferGeometry){let lJ=a._maxInstanceCount!==void 0?a._maxInstanceCount:1/0,_0=Math.min(a.instanceCount,lJ);DJ.renderInstances(f0,MJ,_0)}else DJ.render(f0,MJ)};function _7(L,m,a){if(L.transparent===!0&&L.side===PJ&&L.forceSinglePass===!1)L.side=tJ,L.needsUpdate=!0,Y9(L,m,a),L.side=O7,L.needsUpdate=!0,Y9(L,m,a),L.side=PJ;else Y9(L,m,a)}this.compile=function(L,m,a=null){if(a===null)a=L;if(_=L0.get(a),_.init(m),w.push(_),a.traverseVisible(function(n){if(n.isLight&&n.layers.test(m.layers)){if(_.pushLight(n),n.castShadow)_.pushShadow(n)}}),L!==a)L.traverseVisible(function(n){if(n.isLight&&n.layers.test(m.layers)){if(_.pushLight(n),n.castShadow)_.pushShadow(n)}});_.setupLights();let s=new Set;return L.traverse(function(n){if(!(n.isMesh||n.isPoints||n.isLine||n.isSprite))return;let I0=n.material;if(I0)if(Array.isArray(I0))for(let T0=0;T0<I0.length;T0++){let B0=I0[T0];_7(B0,a,n),s.add(B0)}else _7(I0,a,n),s.add(I0)}),_=w.pop(),s},this.compileAsync=function(L,m,a=null){let s=this.compile(L,m,a);return new Promise((n)=>{function I0(){if(s.forEach(function(T0){if(A.get(T0).currentProgram.isReady())s.delete(T0)}),s.size===0){n(L);return}setTimeout(I0,10)}if(e0.get("KHR_parallel_shader_compile")!==null)I0();else setTimeout(I0,10)})};let a9=null;function N6(L){if(a9)a9(L)}function I9(){c8.stop()}function P9(){c8.start()}let c8=new lZ;if(c8.setAnimationLoop(N6),typeof self<"u")c8.setContext(self);this.setAnimationLoop=function(L){a9=L,E0.setAnimationLoop(L),L===null?c8.stop():c8.start()},E0.addEventListener("sessionstart",I9),E0.addEventListener("sessionend",P9),this.render=function(L,m){if(m!==void 0&&m.isCamera!==!0){n0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(o===!0)return;if(j!==null)j.renderStart(L,m);let a=E0.enabled===!0&&E0.isPresenting===!0,s=k!==null&&(u===null||a)&&k.begin(z,u);if(L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(m.parent===null&&m.matrixWorldAutoUpdate===!0)m.updateMatrixWorld();if(E0.enabled===!0&&E0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(E0.cameraAutoUpdate===!0)E0.updateCamera(m);m=E0.getCamera()}if(L.isScene===!0)L.onBeforeRender(z,L,m,u);if(_=L0.get(L,w.length),_.init(m),_.state.textureUnits=x.getTextureUnits(),w.push(_),UJ.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse),c0.setFromProjectionMatrix(UJ,i$,m.reversedDepth),x0=this.localClippingEnabled,s0=G0.init(this.clippingPlanes,x0),M=S0.get(L,C.length),M.init(),C.push(M),E0.enabled===!0&&E0.isPresenting===!0){let T0=z.xr.getDepthSensingMesh();if(T0!==null)A9(T0,m,-1/0,z.sortObjects)}if(A9(L,m,0,z.sortObjects),M.finish(),z.sortObjects===!0)M.sort(F0,k0,m.reversedDepth);if(GJ=E0.enabled===!1||E0.isPresenting===!1||E0.hasDepthSensing()===!1,GJ)m0.addToRenderList(M,L);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(s0===!0)G0.beginShadows();let n=_.state.shadowsArray;if(h0.render(n,L,m),s0===!0)G0.endShadows();if((s&&k.hasRenderPass())===!1){let{opaque:T0,transmissive:B0}=M;if(_.setupLights(),m.isArrayCamera){let j0=m.cameras;if(B0.length>0)for(let y0=0,o0=j0.length;y0<o0;y0++){let JJ=j0[y0];X9(T0,B0,L,JJ)}if(GJ)m0.render(L);for(let y0=0,o0=j0.length;y0<o0;y0++){let JJ=j0[y0];C7(M,L,JJ,JJ.viewport)}}else{if(B0.length>0)X9(T0,B0,L,m);if(GJ)m0.render(L);C7(M,L,m)}}if(u!==null&&Q0===0)x.updateMultisampleRenderTarget(u),x.updateRenderTargetMipmap(u);if(s)k.end(z);if(L.isScene===!0)L.onAfterRender(z,L,m);if(M0.resetDefaultState(),y=-1,T=null,w.pop(),w.length>0){if(_=w[w.length-1],x.setTextureUnits(_.state.textureUnits),s0===!0)G0.setGlobalState(z.clippingPlanes,_.state.camera)}else _=null;if(C.pop(),C.length>0)M=C[C.length-1];else M=null;if(j!==null)j.renderEnd()};function A9(L,m,a,s){if(L.visible===!1)return;if(L.layers.test(m.layers)){if(L.isGroup)a=L.renderOrder;else if(L.isLOD){if(L.autoUpdate===!0)L.update(m)}else if(L.isLightProbeGrid)_.pushLightProbeGrid(L);else if(L.isLight){if(_.pushLight(L),L.castShadow)_.pushShadow(L)}else if(L.isSprite){if(!L.frustumCulled||c0.intersectsSprite(L)){if(s)qJ.setFromMatrixPosition(L.matrixWorld).applyMatrix4(UJ);let T0=t.update(L),B0=L.material;if(B0.visible)M.push(L,T0,B0,a,qJ.z,null)}}else if(L.isMesh||L.isLine||L.isPoints){if(!L.frustumCulled||c0.intersectsObject(L)){let T0=t.update(L),B0=L.material;if(s){if(L.boundingSphere!==void 0){if(L.boundingSphere===null)L.computeBoundingSphere();qJ.copy(L.boundingSphere.center)}else{if(T0.boundingSphere===null)T0.computeBoundingSphere();qJ.copy(T0.boundingSphere.center)}qJ.applyMatrix4(L.matrixWorld).applyMatrix4(UJ)}if(Array.isArray(B0)){let j0=T0.groups;for(let y0=0,o0=j0.length;y0<o0;y0++){let JJ=j0[y0],f0=B0[JJ.materialIndex];if(f0&&f0.visible)M.push(L,T0,f0,a,qJ.z,JJ)}}else if(B0.visible)M.push(L,T0,B0,a,qJ.z,null)}}}let I0=L.children;for(let T0=0,B0=I0.length;T0<B0;T0++)A9(I0[T0],m,a,s)}function C7(L,m,a,s){let{opaque:n,transmissive:I0,transparent:T0}=L;if(_.setupLightsView(a),s0===!0)G0.setGlobalState(z.clippingPlanes,a);if(s)D.viewport(f.copy(s));if(n.length>0)r9(n,m,a);if(I0.length>0)r9(I0,m,a);if(T0.length>0)r9(T0,m,a);D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function X9(L,m,a,s){if((a.isScene===!0?a.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[s.id]===void 0){let f0=e0.has("EXT_color_buffer_half_float")||e0.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[s.id]=new B8(1,1,{generateMipmaps:!0,type:f0?J9:j8,minFilter:f9,samples:Math.max(4,h.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:XJ.workingColorSpace})}let I0=_.state.transmissionRenderTarget[s.id],T0=s.viewport||f;I0.setSize(T0.z*z.transmissionResolutionScale,T0.w*z.transmissionResolutionScale);let B0=z.getRenderTarget(),j0=z.getActiveCubeFace(),y0=z.getActiveMipmapLevel();if(z.setRenderTarget(I0),z.getClearColor(J0),i=z.getClearAlpha(),i<1)z.setClearColor(16777215,0.5);if(z.clear(),GJ)m0.render(a);let o0=z.toneMapping;z.toneMapping=S8;let JJ=s.viewport;if(s.viewport!==void 0)s.viewport=void 0;if(_.setupLightsView(s),s0===!0)G0.setGlobalState(z.clippingPlanes,s);if(r9(L,a,s),x.updateMultisampleRenderTarget(I0),x.updateRenderTargetMipmap(I0),e0.has("WEBGL_multisampled_render_to_texture")===!1){let f0=!1;for(let NJ=0,MJ=m.length;NJ<MJ;NJ++){let LJ=m[NJ],{object:DJ,geometry:lJ,material:_0,group:X8}=LJ;if(_0.side===PJ&&DJ.layers.test(s.layers)){let WJ=_0.side;_0.side=tJ,_0.needsUpdate=!0,T7(DJ,a,s,lJ,_0,X8),_0.side=WJ,_0.needsUpdate=!0,f0=!0}}if(f0===!0)x.updateMultisampleRenderTarget(I0),x.updateRenderTargetMipmap(I0)}if(z.setRenderTarget(B0,j0,y0),z.setClearColor(J0,i),JJ!==void 0)s.viewport=JJ;z.toneMapping=o0}function r9(L,m,a){let s=m.isScene===!0?m.overrideMaterial:null;for(let n=0,I0=L.length;n<I0;n++){let T0=L[n],{object:B0,geometry:j0,group:y0}=T0,o0=T0.material;if(o0.allowOverride===!0&&s!==null)o0=s;if(B0.layers.test(a.layers))T7(B0,m,a,j0,o0,y0)}}function T7(L,m,a,s,n,I0){if(L.onBeforeRender(z,m,a,s,n,I0),L.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),n.onBeforeRender(z,m,a,s,L,I0),n.transparent===!0&&n.side===PJ&&n.forceSinglePass===!1)n.side=tJ,n.needsUpdate=!0,z.renderBufferDirect(a,m,s,n,L,I0),n.side=O7,n.needsUpdate=!0,z.renderBufferDirect(a,m,s,n,L,I0),n.side=PJ;else z.renderBufferDirect(a,m,s,n,L,I0);L.onAfterRender(z,m,a,s,n,I0)}function Y9(L,m,a){if(m.isScene!==!0)m=YJ;let s=A.get(L),n=_.state.lights,I0=_.state.shadowsArray,T0=n.state.version,B0=$0.getParameters(L,n.state,I0,m,a,_.state.lightProbeGridArray),j0=$0.getProgramCacheKey(B0),y0=s.programs;s.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?m.environment:null,s.fog=m.fog;let o0=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;if(s.envMap=X0.get(L.envMap||s.environment,o0),s.envMapRotation=s.environment!==null&&L.envMap===null?m.environmentRotation:L.envMapRotation,y0===void 0)L.addEventListener("dispose",Z8),y0=new Map,s.programs=y0;let JJ=y0.get(j0);if(JJ!==void 0){if(s.currentProgram===JJ&&s.lightsStateVersion===T0)return S7(L,B0),JJ}else{if(B0.uniforms=$0.getUniforms(L),j!==null&&L.isNodeMaterial)j.build(L,a,B0);L.onBeforeCompile(B0,z),JJ=$0.acquireProgram(B0,j0),y0.set(j0,JJ),s.uniforms=B0.uniforms}let f0=s.uniforms;if(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)f0.clippingPlanes=G0.uniform;if(S7(L,B0),s.needsLights=F6(L),s.lightsStateVersion=T0,s.needsLights)f0.ambientLightColor.value=n.state.ambient,f0.lightProbe.value=n.state.probe,f0.directionalLights.value=n.state.directional,f0.directionalLightShadows.value=n.state.directionalShadow,f0.spotLights.value=n.state.spot,f0.spotLightShadows.value=n.state.spotShadow,f0.rectAreaLights.value=n.state.rectArea,f0.ltc_1.value=n.state.rectAreaLTC1,f0.ltc_2.value=n.state.rectAreaLTC2,f0.pointLights.value=n.state.point,f0.pointLightShadows.value=n.state.pointShadow,f0.hemisphereLights.value=n.state.hemi,f0.directionalShadowMatrix.value=n.state.directionalShadowMatrix,f0.spotLightMatrix.value=n.state.spotLightMatrix,f0.spotLightMap.value=n.state.spotLightMap,f0.pointShadowMatrix.value=n.state.pointShadowMatrix;return s.lightProbeGrid=_.state.lightProbeGridArray.length>0,s.currentProgram=JJ,s.uniformsList=null,JJ}function G6(L){if(L.uniformsList===null){let m=L.currentProgram.getUniforms();L.uniformsList=W6.seqWithValue(m.seq,L.uniforms)}return L.uniformsList}function S7(L,m){let a=A.get(L);a.outputColorSpace=m.outputColorSpace,a.batching=m.batching,a.batchingColor=m.batchingColor,a.instancing=m.instancing,a.instancingColor=m.instancingColor,a.instancingMorph=m.instancingMorph,a.skinning=m.skinning,a.morphTargets=m.morphTargets,a.morphNormals=m.morphNormals,a.morphColors=m.morphColors,a.morphTargetsCount=m.morphTargetsCount,a.numClippingPlanes=m.numClippingPlanes,a.numIntersection=m.numClipIntersection,a.vertexAlphas=m.vertexAlphas,a.vertexTangents=m.vertexTangents,a.toneMapping=m.toneMapping}function y8(L,m){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;P.setFromMatrixPosition(m.matrixWorld);for(let a=0,s=L.length;a<s;a++){let n=L[a];if(n.texture!==null&&n.boundingBox.containsPoint(P))return n}return null}function zQ(L,m,a,s,n){if(m.isScene!==!0)m=YJ;x.resetTextureUnits();let I0=m.fog,T0=s.isMeshStandardMaterial||s.isMeshLambertMaterial||s.isMeshPhongMaterial?m.environment:null,B0=u===null?z.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:XJ.workingColorSpace,j0=s.isMeshStandardMaterial||s.isMeshLambertMaterial&&!s.envMap||s.isMeshPhongMaterial&&!s.envMap,y0=X0.get(s.envMap||T0,j0),o0=s.vertexColors===!0&&!!a.attributes.color&&a.attributes.color.itemSize===4,JJ=!!a.attributes.tangent&&(!!s.normalMap||s.anisotropy>0),f0=!!a.morphAttributes.position,NJ=!!a.morphAttributes.normal,MJ=!!a.morphAttributes.color,LJ=S8;if(s.toneMapped){if(u===null||u.isXRRenderTarget===!0)LJ=z.toneMapping}let DJ=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,lJ=DJ!==void 0?DJ.length:0,_0=A.get(s),X8=_.state.lights;if(s0===!0){if(x0===!0||L!==T){let kJ=L===T&&s.id===y;G0.setState(s,L,kJ)}}let WJ=!1;if(s.version===_0.__version){if(_0.needsLights&&_0.lightsStateVersion!==X8.state.version)WJ=!0;else if(_0.outputColorSpace!==B0)WJ=!0;else if(n.isBatchedMesh&&_0.batching===!1)WJ=!0;else if(!n.isBatchedMesh&&_0.batching===!0)WJ=!0;else if(n.isBatchedMesh&&_0.batchingColor===!0&&n.colorTexture===null)WJ=!0;else if(n.isBatchedMesh&&_0.batchingColor===!1&&n.colorTexture!==null)WJ=!0;else if(n.isInstancedMesh&&_0.instancing===!1)WJ=!0;else if(!n.isInstancedMesh&&_0.instancing===!0)WJ=!0;else if(n.isSkinnedMesh&&_0.skinning===!1)WJ=!0;else if(!n.isSkinnedMesh&&_0.skinning===!0)WJ=!0;else if(n.isInstancedMesh&&_0.instancingColor===!0&&n.instanceColor===null)WJ=!0;else if(n.isInstancedMesh&&_0.instancingColor===!1&&n.instanceColor!==null)WJ=!0;else if(n.isInstancedMesh&&_0.instancingMorph===!0&&n.morphTexture===null)WJ=!0;else if(n.isInstancedMesh&&_0.instancingMorph===!1&&n.morphTexture!==null)WJ=!0;else if(_0.envMap!==y0)WJ=!0;else if(s.fog===!0&&_0.fog!==I0)WJ=!0;else if(_0.numClippingPlanes!==void 0&&(_0.numClippingPlanes!==G0.numPlanes||_0.numIntersection!==G0.numIntersection))WJ=!0;else if(_0.vertexAlphas!==o0)WJ=!0;else if(_0.vertexTangents!==JJ)WJ=!0;else if(_0.morphTargets!==f0)WJ=!0;else if(_0.morphNormals!==NJ)WJ=!0;else if(_0.morphColors!==MJ)WJ=!0;else if(_0.toneMapping!==LJ)WJ=!0;else if(_0.morphTargetsCount!==lJ)WJ=!0;else if(!!_0.lightProbeGrid!==_.state.lightProbeGridArray.length>0)WJ=!0}else WJ=!0,_0.__version=s.version;let Y8=_0.currentProgram;if(WJ===!0){if(Y8=Y9(s,m,n),j&&s.isNodeMaterial)j.onUpdateProgram(s,Y8,_0)}let E8=!1,v8=!1,w9=!1,FJ=Y8.getUniforms(),SJ=_0.uniforms;if(D.useProgram(Y8.program))E8=!0,v8=!0,w9=!0;if(s.id!==y)y=s.id,v8=!0;if(_0.needsLights){let kJ=y8(_.state.lightProbeGridArray,n);if(_0.lightProbeGrid!==kJ)_0.lightProbeGrid=kJ,v8=!0}if(E8||T!==L){if(D.buffers.depth.getReversed()&&L.reversedDepth!==!0)L._reversedDepth=!0,L.updateProjectionMatrix();FJ.setValue(b,"projectionMatrix",L.projectionMatrix),FJ.setValue(b,"viewMatrix",L.matrixWorldInverse);let A8=FJ.map.cameraPosition;if(A8!==void 0)A8.setValue(b,i0.setFromMatrixPosition(L.matrixWorld));if(h.logarithmicDepthBuffer)FJ.setValue(b,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2));if(s.isMeshPhongMaterial||s.isMeshToonMaterial||s.isMeshLambertMaterial||s.isMeshBasicMaterial||s.isMeshStandardMaterial||s.isShaderMaterial)FJ.setValue(b,"isOrthographic",L.isOrthographicCamera===!0);if(T!==L)T=L,v8=!0,w9=!0}if(_0.needsLights){if(X8.state.directionalShadowMap.length>0)FJ.setValue(b,"directionalShadowMap",X8.state.directionalShadowMap,x);if(X8.state.spotShadowMap.length>0)FJ.setValue(b,"spotShadowMap",X8.state.spotShadowMap,x);if(X8.state.pointShadowMap.length>0)FJ.setValue(b,"pointShadowMap",X8.state.pointShadowMap,x)}if(n.isSkinnedMesh){FJ.setOptional(b,n,"bindMatrix"),FJ.setOptional(b,n,"bindMatrixInverse");let kJ=n.skeleton;if(kJ){if(kJ.boneTexture===null)kJ.computeBoneTexture();FJ.setValue(b,"boneTexture",kJ.boneTexture,x)}}if(n.isBatchedMesh){if(FJ.setOptional(b,n,"batchingTexture"),FJ.setValue(b,"batchingTexture",n._matricesTexture,x),FJ.setOptional(b,n,"batchingIdTexture"),FJ.setValue(b,"batchingIdTexture",n._indirectTexture,x),FJ.setOptional(b,n,"batchingColorTexture"),n._colorsTexture!==null)FJ.setValue(b,"batchingColorTexture",n._colorsTexture,x)}let R8=a.morphAttributes;if(R8.position!==void 0||R8.normal!==void 0||R8.color!==void 0)KJ.update(n,a,Y8);if(v8||_0.receiveShadow!==n.receiveShadow)_0.receiveShadow=n.receiveShadow,FJ.setValue(b,"receiveShadow",n.receiveShadow);if((s.isMeshStandardMaterial||s.isMeshLambertMaterial||s.isMeshPhongMaterial)&&s.envMap===null&&m.environment!==null)SJ.envMapIntensity.value=m.environmentIntensity;if(SJ.dfgLUT!==void 0)SJ.dfgLUT.value=AN();if(v8){if(FJ.setValue(b,"toneMappingExposure",z.toneMappingExposure),_0.needsLights)IQ(SJ,w9);if(I0&&s.fog===!0)O0.refreshFogUniforms(SJ,I0);if(O0.refreshMaterialUniforms(SJ,s,N0,Z0,_.state.transmissionRenderTarget[L.id]),_0.needsLights&&_0.lightProbeGrid){let kJ=_0.lightProbeGrid;SJ.probesSH.value=kJ.texture,SJ.probesMin.value.copy(kJ.boundingBox.min),SJ.probesMax.value.copy(kJ.boundingBox.max),SJ.probesResolution.value.copy(kJ.resolution)}W6.upload(b,G6(_0),SJ,x)}if(s.isShaderMaterial&&s.uniformsNeedUpdate===!0)W6.upload(b,G6(_0),SJ,x),s.uniformsNeedUpdate=!1;if(s.isSpriteMaterial)FJ.setValue(b,"center",n.center);if(FJ.setValue(b,"modelViewMatrix",n.modelViewMatrix),FJ.setValue(b,"normalMatrix",n.normalMatrix),FJ.setValue(b,"modelMatrix",n.matrixWorld),s.uniformsGroups!==void 0){let kJ=s.uniformsGroups;for(let A8=0,H9=kJ.length;A8<H9;A8++){let j7=kJ[A8];w0.update(j7,Y8),w0.bind(j7,Y8)}}return Y8}function IQ(L,m){L.ambientLightColor.needsUpdate=m,L.lightProbe.needsUpdate=m,L.directionalLights.needsUpdate=m,L.directionalLightShadows.needsUpdate=m,L.pointLights.needsUpdate=m,L.pointLightShadows.needsUpdate=m,L.spotLights.needsUpdate=m,L.spotLightShadows.needsUpdate=m,L.rectAreaLights.needsUpdate=m,L.hemisphereLights.needsUpdate=m}function F6(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}if(this.getActiveCubeFace=function(){return r},this.getActiveMipmapLevel=function(){return Q0},this.getRenderTarget=function(){return u},this.setRenderTargetTextures=function(L,m,a){let s=A.get(L);if(s.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,s.__autoAllocateDepthBuffer===!1)s.__useRenderToTexture=!1;A.get(L.texture).__webglTexture=m,A.get(L.depthTexture).__webglTexture=s.__autoAllocateDepthBuffer?void 0:a,s.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,m){let a=A.get(L);a.__webglFramebuffer=m,a.__useDefaultFramebuffer=m===void 0},this.setRenderTarget=function(L,m=0,a=0){u=L,r=m,Q0=a;let s=null,n=!1,I0=!1;if(L){let B0=A.get(L);if(B0.__useDefaultFramebuffer!==void 0){D.bindFramebuffer(b.FRAMEBUFFER,B0.__webglFramebuffer),f.copy(L.viewport),v.copy(L.scissor),d=L.scissorTest,D.viewport(f),D.scissor(v),D.setScissorTest(d),y=-1;return}else if(B0.__webglFramebuffer===void 0)x.setupRenderTarget(L);else if(B0.__hasExternalTextures)x.rebindTextures(L,A.get(L.texture).__webglTexture,A.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let o0=L.depthTexture;if(B0.__boundDepthTexture!==o0){if(o0!==null&&A.has(o0)&&(L.width!==o0.image.width||L.height!==o0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(L)}}let j0=L.texture;if(j0.isData3DTexture||j0.isDataArrayTexture||j0.isCompressedArrayTexture)I0=!0;let y0=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget){if(Array.isArray(y0[m]))s=y0[m][a];else s=y0[m];n=!0}else if(L.samples>0&&x.useMultisampledRTT(L)===!1)s=A.get(L).__webglMultisampledFramebuffer;else if(Array.isArray(y0))s=y0[a];else s=y0;f.copy(L.viewport),v.copy(L.scissor),d=L.scissorTest}else f.copy(l0).multiplyScalar(N0).floor(),v.copy(C0).multiplyScalar(N0).floor(),d=b0;if(a!==0)s=l;if(D.bindFramebuffer(b.FRAMEBUFFER,s))D.drawBuffers(L,s);if(D.viewport(f),D.scissor(v),D.setScissorTest(d),n){let B0=A.get(L.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+m,B0.__webglTexture,a)}else if(I0){let B0=m;for(let j0=0;j0<L.textures.length;j0++){let y0=A.get(L.textures[j0]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+j0,y0.__webglTexture,a,B0)}}else if(L!==null&&a!==0){let B0=A.get(L.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,B0.__webglTexture,a)}y=-1},this.readRenderTargetPixels=function(L,m,a,s,n,I0,T0,B0=0){if(!(L&&L.isWebGLRenderTarget)){n0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let j0=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&T0!==void 0)j0=j0[T0];if(j0){D.bindFramebuffer(b.FRAMEBUFFER,j0);try{let y0=L.textures[B0],o0=y0.format,JJ=y0.type;if(L.textures.length>1)b.readBuffer(b.COLOR_ATTACHMENT0+B0);if(!h.textureFormatReadable(o0)){n0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!h.textureTypeReadable(JJ)){n0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(m>=0&&m<=L.width-s&&(a>=0&&a<=L.height-n))b.readPixels(m,a,s,n,W0.convert(o0),W0.convert(JJ),I0)}finally{let y0=u!==null?A.get(u).__webglFramebuffer:null;D.bindFramebuffer(b.FRAMEBUFFER,y0)}}},this.readRenderTargetPixelsAsync=async function(L,m,a,s,n,I0,T0,B0=0){if(!(L&&L.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let j0=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&T0!==void 0)j0=j0[T0];if(j0)if(m>=0&&m<=L.width-s&&(a>=0&&a<=L.height-n)){D.bindFramebuffer(b.FRAMEBUFFER,j0);let y0=L.textures[B0],o0=y0.format,JJ=y0.type;if(L.textures.length>1)b.readBuffer(b.COLOR_ATTACHMENT0+B0);if(!h.textureFormatReadable(o0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!h.textureTypeReadable(JJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let f0=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,f0),b.bufferData(b.PIXEL_PACK_BUFFER,I0.byteLength,b.STREAM_READ),b.readPixels(m,a,s,n,W0.convert(o0),W0.convert(JJ),0);let NJ=u!==null?A.get(u).__webglFramebuffer:null;D.bindFramebuffer(b.FRAMEBUFFER,NJ);let MJ=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await FZ(b,MJ,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,f0),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,I0),b.deleteBuffer(f0),b.deleteSync(MJ),I0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,m=null,a=0){let s=Math.pow(2,-a),n=Math.floor(L.image.width*s),I0=Math.floor(L.image.height*s),T0=m!==null?m.x:0,B0=m!==null?m.y:0;x.setTexture2D(L,0),b.copyTexSubImage2D(b.TEXTURE_2D,a,0,0,T0,B0,n,I0),D.unbindTexture()},this.copyTextureToTexture=function(L,m,a=null,s=null,n=0,I0=0){let T0,B0,j0,y0,o0,JJ,f0,NJ,MJ,LJ=L.isCompressedTexture?L.mipmaps[I0]:L.image;if(a!==null)T0=a.max.x-a.min.x,B0=a.max.y-a.min.y,j0=a.isBox3?a.max.z-a.min.z:1,y0=a.min.x,o0=a.min.y,JJ=a.isBox3?a.min.z:0;else{let SJ=Math.pow(2,-n);if(T0=Math.floor(LJ.width*SJ),B0=Math.floor(LJ.height*SJ),L.isDataArrayTexture)j0=LJ.depth;else if(L.isData3DTexture)j0=Math.floor(LJ.depth*SJ);else j0=1;y0=0,o0=0,JJ=0}if(s!==null)f0=s.x,NJ=s.y,MJ=s.z;else f0=0,NJ=0,MJ=0;let DJ=W0.convert(m.format),lJ=W0.convert(m.type),_0;if(m.isData3DTexture)x.setTexture3D(m,0),_0=b.TEXTURE_3D;else if(m.isDataArrayTexture||m.isCompressedArrayTexture)x.setTexture2DArray(m,0),_0=b.TEXTURE_2D_ARRAY;else x.setTexture2D(m,0),_0=b.TEXTURE_2D;D.activeTexture(b.TEXTURE0),D.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,m.flipY),D.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),D.pixelStorei(b.UNPACK_ALIGNMENT,m.unpackAlignment);let X8=D.getParameter(b.UNPACK_ROW_LENGTH),WJ=D.getParameter(b.UNPACK_IMAGE_HEIGHT),Y8=D.getParameter(b.UNPACK_SKIP_PIXELS),E8=D.getParameter(b.UNPACK_SKIP_ROWS),v8=D.getParameter(b.UNPACK_SKIP_IMAGES);D.pixelStorei(b.UNPACK_ROW_LENGTH,LJ.width),D.pixelStorei(b.UNPACK_IMAGE_HEIGHT,LJ.height),D.pixelStorei(b.UNPACK_SKIP_PIXELS,y0),D.pixelStorei(b.UNPACK_SKIP_ROWS,o0),D.pixelStorei(b.UNPACK_SKIP_IMAGES,JJ);let w9=L.isDataArrayTexture||L.isData3DTexture,FJ=m.isDataArrayTexture||m.isData3DTexture;if(L.isDepthTexture){let SJ=A.get(L),R8=A.get(m),kJ=A.get(SJ.__renderTarget),A8=A.get(R8.__renderTarget);D.bindFramebuffer(b.READ_FRAMEBUFFER,kJ.__webglFramebuffer),D.bindFramebuffer(b.DRAW_FRAMEBUFFER,A8.__webglFramebuffer);for(let H9=0;H9<j0;H9++){if(w9)b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,A.get(L).__webglTexture,n,JJ+H9),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,A.get(m).__webglTexture,I0,MJ+H9);b.blitFramebuffer(y0,o0,T0,B0,f0,NJ,T0,B0,b.DEPTH_BUFFER_BIT,b.NEAREST)}D.bindFramebuffer(b.READ_FRAMEBUFFER,null),D.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(n!==0||L.isRenderTargetTexture||A.has(L)){let SJ=A.get(L),R8=A.get(m);D.bindFramebuffer(b.READ_FRAMEBUFFER,e),D.bindFramebuffer(b.DRAW_FRAMEBUFFER,c);for(let kJ=0;kJ<j0;kJ++){if(w9)b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,SJ.__webglTexture,n,JJ+kJ);else b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,SJ.__webglTexture,n);if(FJ)b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,R8.__webglTexture,I0,MJ+kJ);else b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,R8.__webglTexture,I0);if(n!==0)b.blitFramebuffer(y0,o0,T0,B0,f0,NJ,T0,B0,b.COLOR_BUFFER_BIT,b.NEAREST);else if(FJ)b.copyTexSubImage3D(_0,I0,f0,NJ,MJ+kJ,y0,o0,T0,B0);else b.copyTexSubImage2D(_0,I0,f0,NJ,y0,o0,T0,B0)}D.bindFramebuffer(b.READ_FRAMEBUFFER,null),D.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(FJ)if(L.isDataTexture||L.isData3DTexture)b.texSubImage3D(_0,I0,f0,NJ,MJ,T0,B0,j0,DJ,lJ,LJ.data);else if(m.isCompressedArrayTexture)b.compressedTexSubImage3D(_0,I0,f0,NJ,MJ,T0,B0,j0,DJ,LJ.data);else b.texSubImage3D(_0,I0,f0,NJ,MJ,T0,B0,j0,DJ,lJ,LJ);else if(L.isDataTexture)b.texSubImage2D(b.TEXTURE_2D,I0,f0,NJ,T0,B0,DJ,lJ,LJ.data);else if(L.isCompressedTexture)b.compressedTexSubImage2D(b.TEXTURE_2D,I0,f0,NJ,LJ.width,LJ.height,DJ,LJ.data);else b.texSubImage2D(b.TEXTURE_2D,I0,f0,NJ,T0,B0,DJ,lJ,LJ);if(D.pixelStorei(b.UNPACK_ROW_LENGTH,X8),D.pixelStorei(b.UNPACK_IMAGE_HEIGHT,WJ),D.pixelStorei(b.UNPACK_SKIP_PIXELS,Y8),D.pixelStorei(b.UNPACK_SKIP_ROWS,E8),D.pixelStorei(b.UNPACK_SKIP_IMAGES,v8),I0===0&&m.generateMipmaps)b.generateMipmap(_0);D.unbindTexture()},this.initRenderTarget=function(L){if(A.get(L).__webglFramebuffer===void 0)x.setupRenderTarget(L)},this.initTexture=function(L){if(L.isCubeTexture)x.setTextureCube(L,0);else if(L.isData3DTexture)x.setTexture3D(L,0);else if(L.isDataArrayTexture||L.isCompressedArrayTexture)x.setTexture2DArray(L,0);else x.setTexture2D(L,0);D.unbindTexture()},this.resetState=function(){r=0,Q0=0,u=null,D.reset(),M0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return i$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=XJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=XJ._getUnpackColorSpace()}}var WX={type:"change"},hK={type:"start"},XX={type:"end"},RQ=new M7,ZX=new T8,wN=Math.cos(70*r$.DEG2RAD),uJ=new p,q8=2*Math.PI,VJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vK=0.000001;class fK extends NQ{constructor(J,Q=null){super(J,Q);if(this.state=VJ.NONE,this.target=new p,this.cursor=new p,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:D9.ROTATE,MIDDLE:D9.DOLLY,RIGHT:D9.PAN},this.touches={ONE:E9.ROTATE,TWO:E9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new p,this._lastQuaternion=new L8,this._lastTargetPosition=new p,this._quat=new L8().setFromUnitVectors(J.up,new p(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new J6,this._sphericalDelta=new J6,this._scale=1,this._panOffset=new p,this._rotateStart=new p0,this._rotateEnd=new p0,this._rotateDelta=new p0,this._panStart=new p0,this._panEnd=new p0,this._panDelta=new p0,this._dollyStart=new p0,this._dollyEnd=new p0,this._dollyDelta=new p0,this._dollyDirection=new p,this._mouse=new p0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CN.bind(this),this._onPointerDown=_N.bind(this),this._onPointerUp=TN.bind(this),this._onContextMenu=bN.bind(this),this._onMouseWheel=yN.bind(this),this._onKeyDown=vN.bind(this),this._onTouchStart=hN.bind(this),this._onTouchMove=fN.bind(this),this._onMouseDown=SN.bind(this),this._onMouseMove=jN.bind(this),this._interceptControlDown=xN.bind(this),this._interceptControlUp=gN.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(WX),this.update(),this.state=VJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(uJ.copy(Q).sub(this.target),uJ.applyQuaternion(this._quat),this._spherical.setFromVector3(uJ),this.autoRotate&&this.state===VJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,K=this.maxAzimuthAngle;if(isFinite($)&&isFinite(K)){if($<-Math.PI)$+=q8;else if($>Math.PI)$-=q8;if(K<-Math.PI)K+=q8;else if(K>Math.PI)K-=q8;if($<=K)this._spherical.theta=Math.max($,Math.min(K,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+K)/2?Math.max($,this._spherical.theta):Math.min(K,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let Z=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=Z!=this._spherical.radius}if(uJ.setFromSpherical(this._spherical),uJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(uJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let Z=null;if(this.object.isPerspectiveCamera){let X=uJ.length();Z=this._clampDistance(X*this._scale);let Y=X-Z;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),W=!!Y}else if(this.object.isOrthographicCamera){let X=new p(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=Y!==this.object.zoom;let H=new p(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),Z=uJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(Z!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(Z).add(this.object.position);else if(RQ.origin.copy(this.object.position),RQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(RQ.direction))<wN)this.object.lookAt(this.target);else ZX.setFromNormalAndCoplanarPoint(this.object.up,this.target),RQ.intersectPlane(ZX,this.target)}else if(this.object.isOrthographicCamera){let Z=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),Z!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>vK||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vK||this._lastTargetPosition.distanceToSquared(this.target)>vK)return this.dispatchEvent(WX),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return q8/60*this.autoRotateSpeed*J;else return q8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){uJ.setFromMatrixColumn(Q,0),uJ.multiplyScalar(-J),this._panOffset.add(uJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)uJ.setFromMatrixColumn(Q,1);else uJ.setFromMatrixColumn(Q,0),uJ.crossVectors(this.object.up,uJ);uJ.multiplyScalar(J),this._panOffset.add(uJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let K=this.object.position;uJ.copy(K).sub(this.target);let W=uJ.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/$.clientHeight,this.object.matrix),this._panUp(2*Q*W/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),K=J-$.left,W=Q-$.top,Z=$.width,X=$.height;this._mouse.x=K/Z*2-1,this._mouse.y=-(W/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(q8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(q8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(q8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-q8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(q8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-q8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateStart.set($,K)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panStart.set($,K)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,K=J.pageY-Q.y,W=Math.sqrt($*$+K*K);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),K=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._rotateEnd.set(K,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(q8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(q8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._panEnd.set($,K)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,K=J.pageY-Q.y,W=Math.sqrt($*$+K*K);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let Z=(J.pageX+Q.x)*0.5,X=(J.pageY+Q.y)*0.5;this._updateZoomParameters(Z,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new p0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function _N(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function CN(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function TN(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(XX),this.state=VJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function SN(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case D9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=VJ.DOLLY;break;case D9.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=VJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=VJ.ROTATE}break;case D9.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=VJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=VJ.PAN}break;default:this.state=VJ.NONE}if(this.state!==VJ.NONE)this.dispatchEvent(hK)}function jN(J){switch(this.state){case VJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case VJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case VJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function yN(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==VJ.NONE)return;J.preventDefault(),this.dispatchEvent(hK),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(XX)}function vN(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function hN(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case E9.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=VJ.TOUCH_ROTATE;break;case E9.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=VJ.TOUCH_PAN;break;default:this.state=VJ.NONE}break;case 2:switch(this.touches.TWO){case E9.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=VJ.TOUCH_DOLLY_PAN;break;case E9.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=VJ.TOUCH_DOLLY_ROTATE;break;default:this.state=VJ.NONE}break;default:this.state=VJ.NONE}if(this.state!==VJ.NONE)this.dispatchEvent(hK)}function fN(J){switch(this._trackPointer(J),this.state){case VJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case VJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case VJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case VJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=VJ.NONE}}function bN(J){if(this.enabled===!1)return;J.preventDefault()}function xN(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function gN(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function YX(J){let Q;try{Q=new yK({antialias:!0,alpha:!1})}catch(y){if(console.error("WebGL renderer unavailable:",y),J)J.innerHTML='<div class="webgl-fallback" style="color:#ffd700;font-family:Orbitron,sans-serif;text-align:center;padding:32px;margin:24px;border:2px solid #7b2d8e;border-radius:18px;background:rgba(26,0,37,0.88);"><h2>WebGL unavailable</h2><p style="color:#9980aa;margin-top:8px;">This game requires a browser with WebGL support. Try a recent Chrome, Firefox, or Edge.</p></div>';return null}Q.setSize(window.innerWidth,window.innerHeight),Q.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q.shadowMap.enabled=!0,Q.shadowMap.type=v9,Q.toneMapping=d7,Q.toneMappingExposure=1.6,Q.outputColorSpace=o6,J.appendChild(Q.domElement);let $=new JQ;$.background=new t0(919066),$.fog=new o7(919066,0.025);let K=new z8(40,64,64),W=new U8({side:tJ,uniforms:{topColor:{value:new t0(1706808)},bottomColor:{value:new t0(328208)},offset:{value:0},exponent:{value:0.6}},vertexShader:`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        float t = max(pow(max(h, 0.0), exponent), 0.0);
        gl_FragColor = vec4(mix(bottomColor, topColor, t), 1.0);
      }
    `}),Z=new K0(K,W);$.add(Z);let X=new sJ(40,window.innerWidth/window.innerHeight,0.1,50);X.position.set(8,6,9);let Y=new fK(X,Q.domElement);Y.target.set(0,0.6,-0.5),Y.enableDamping=!0,Y.dampingFactor=0.08,Y.minDistance=4,Y.maxDistance=20,Y.maxPolarAngle=Math.PI/2,Y.minPolarAngle=Math.PI/7,Y.update(),$.add(new qQ(8934860,1.4));let H=new I7(16772829,2.2);H.position.set(5,10,4),H.castShadow=!0,H.shadow.mapSize.width=1024,H.shadow.mapSize.height=1024,$.add(H);let U=new I7(14527231,1.2);U.position.set(-4,5,-3),$.add(U);let G=new I7(4517631,0.8);G.position.set(5,3,-4),$.add(G);let O=new L9(16768392,1.2,15,Math.PI/5,0.5,1);O.position.set(0,7,2),O.target.position.set(0,0,-0.5),$.add(O),$.add(O.target);let q=new L9(14527231,0.8,12,Math.PI/4,0.5,1);q.position.set(-2,6,-1),q.target.position.set(0,0.3,0),$.add(q),$.add(q.target);let R=new L9(16766720,1.5,10,Math.PI/6,0.6,1);R.position.set(-2,5,-4),R.target.position.set(-2,1.5,-3),$.add(R),$.add(R.target);let V=new L9(16766720,1.5,10,Math.PI/6,0.6,1);V.position.set(2,5,-4),V.target.position.set(2,1.5,-3),$.add(V),$.add(V.target);let I=new L9(16777215,1,10,Math.PI/8,0.4,1);I.position.set(0,6,-3),I.target.position.set(0,1.5,-3),$.add(I),$.add(I.target);let E=new $9(16766720,0.6,4);E.position.set(-2.5,2,-2.5),$.add(E);let N=new $9(16766720,0.6,4);N.position.set(2.5,2,-2.5),$.add(N);let S=new $9(16755268,0.5,5);S.position.set(0,2.5,-2.5),$.add(S);let P=[];[[-6,4],[6,4],[-6,-2],[6,-2],[-6,-5],[6,-5]].forEach(([y,T])=>{let f=new A0({color:8939059,roughness:0.25,metalness:0.85,emissive:5583616,emissiveIntensity:0.1}),v=new K0(new pJ(0.25,0.35,3.5,8),f);v.position.set(y,1.75,T),v.castShadow=!0,$.add(v);let d=new A0({color:14527027,roughness:0.15,metalness:0.9,emissive:11171584,emissiveIntensity:0.3}),J0=new K0(new pJ(0.45,0.35,0.25,8),d);J0.position.set(y,3.6,T),$.add(J0);let i=new K0(new pJ(0.38,0.42,0.15,8),d);i.position.set(y,0.05,T),$.add(i);let B=new A0({color:6702114,roughness:0.7,metalness:0.6}),Z0=new K0(new pJ(0.04,0.06,0.3,6),B);Z0.position.set(y,3.85,T),$.add(Z0);let N0=new A0({color:16737792,emissive:16729088,emissiveIntensity:2.5,transparent:!0,opacity:0.7}),F0=new K0(new Q9(0.15,0.5,6),N0.clone());F0.position.set(y,4.15,T),$.add(F0);let k0=new A0({color:16772676,emissive:16777096,emissiveIntensity:4,transparent:!0,opacity:0.85}),l0=new K0(new Q9(0.07,0.3,6),k0.clone());l0.position.set(y,4.1,T),$.add(l0);let C0=new _J({color:16777215,transparent:!0,opacity:0.6}),b0=new K0(new Q9(0.03,0.12,4),C0.clone());b0.position.set(y,4.05,T),$.add(b0);let c0=new $9(16737792,1,5);c0.position.set(y,4.2,T),$.add(c0),P.push({outer:F0,inner:l0,core:b0,light:c0,baseY:4.15,phase:Math.random()*Math.PI*2,pos:{x:y,z:T}})});let _=new _J({color:16763972,transparent:!0,opacity:0.2}),C=[];for(let y=0;y<8;y++){let T=y/8*Math.PI*2,f=5.5+Math.random()*2.5,v=3+Math.random()*2,d=Math.cos(T)*f,J0=Math.sin(T)*f-1,i=new K0(new z8(0.12,8,8),_);i.position.set(d,v,J0),$.add(i);let B=new $9(16763972,0.15,2);B.position.copy(i.position),$.add(B),C.push({mesh:i,light:B,angle:T,radius:f,baseHeight:v,phase:Math.random()*Math.PI*2})}let w=new d9({color:14531583,size:0.04,transparent:!0,opacity:0.6,blending:b8}),k=new hJ,z=new Float32Array(1800);for(let y=0;y<600;y++)z[y*3]=(Math.random()-0.5)*40,z[y*3+1]=Math.random()*15,z[y*3+2]=(Math.random()-0.5)*40-5;k.setAttribute("position",new oJ(z,3));let o=new L7(k,w);$.add(o);function j(){let y=document.createElement("canvas");y.width=1024,y.height=1024;let T=y.getContext("2d"),f=T.createRadialGradient(512,512,0,512,512,720);f.addColorStop(0,"#120820"),f.addColorStop(1,"#0a0515"),T.fillStyle=f,T.fillRect(0,0,1024,1024);let v=8,d=1024/v;for(let i=0;i<v;i++)for(let B=0;B<v;B++)if((i+B)%2===0)T.fillStyle="rgba(30, 15, 50, 0.35)",T.fillRect(i*d,B*d,d,d);T.strokeStyle="rgba(255, 215, 0, 0.12)",T.lineWidth=2;for(let i=0;i<=v;i++)T.beginPath(),T.moveTo(i*d,0),T.lineTo(i*d,1024),T.stroke(),T.beginPath(),T.moveTo(0,i*d),T.lineTo(1024,i*d),T.stroke();for(let i=0;i<5000;i++)T.fillStyle=`rgba(255, 255, 255, ${Math.random()*0.03})`,T.fillRect(Math.random()*1024,Math.random()*1024,2,2);let J0=new WQ(y);return J0.wrapS=l7,J0.wrapT=l7,J0.repeat.set(4,4),J0}let l=j(),e=new K0(new p8(40,40),new A0({map:l,color:16777215,roughness:0.35,metalness:0.45,emissive:1116194,emissiveIntensity:0.15}));e.rotation.x=-Math.PI/2,e.position.y=-0.1,e.receiveShadow=!0,$.add(e);let c=new _J({color:13404415,transparent:!0,opacity:0.08});for(let y=-10;y<=10;y++){let T=new K0(new D0(40,0.003,0.015),c);T.position.set(0,-0.09,y*2),$.add(T);let f=new K0(new D0(0.015,0.003,40),c);f.position.set(y*2,-0.09,0),$.add(f)}let r=new K0(new m8(4,4.2,32),new _J({color:16766720,transparent:!0,opacity:0.08,side:PJ}));r.rotation.x=-Math.PI/2,r.position.set(0,-0.08,0),$.add(r),[[-4.5,1.2,-3,16766720],[4.5,1.2,-3,16766720],[-4.5,1.2,2,16729190],[4.5,1.2,2,65416],[-3,0.5,-3,4517631],[3,0.5,-3,16746564]].forEach(([y,T,f,v])=>{let d=new $9(v,0.7,4);d.position.set(y,T,f),$.add(d);let J0=new K0(new z8(0.06,8,8),new _J({color:v}));J0.position.copy(d.position),$.add(J0)});let Q0=new _J({color:4456550,transparent:!0,opacity:0.04,side:PJ}),u=[];for(let y=0;y<6;y++){let T=new K0(new p8(3+Math.random()*2,0.3),Q0),f=0.05+Math.random()*0.1;T.position.set((Math.random()-0.5)*8,f,(Math.random()-0.5)*8-1),T.rotation.y=Math.random()*Math.PI*2,$.add(T),u.push({mesh:T,baseY:f,baseX:T.position.x,phase:Math.random()*Math.PI*2})}return window.addEventListener("resize",()=>{X.aspect=window.innerWidth/window.innerHeight,X.updateProjectionMatrix(),Q.setSize(window.innerWidth,window.innerHeight)}),{scene:$,camera:X,renderer:Q,controls:Y,flameData:P,lanterns:C,smokeData:u,updateAmbient(y){let T=0.42+0.32*Math.sin(y*0.6);w.opacity=T;let f=0.5+0.5*Math.sin(y*0.35+1);w.color.setRGB(0.78+f*0.1,0.66+(1-f)*0.1,0.95);for(let v of u)v.mesh.position.y=v.baseY+Math.sin(y*0.4+v.phase)*0.18,v.mesh.position.x=v.baseX+Math.sin(y*0.25+v.phase*1.7)*0.35},updateFlames(y){for(let T of P){let f=0.5+0.5*Math.sin(y*8+T.phase),v=0.4+0.6*Math.sin(y*11+T.phase*1.3),d=f*v;if(T.outer.material.emissiveIntensity=1.5+2.5*d,T.outer.material.opacity=0.4+0.4*d,T.inner.material.emissiveIntensity=2.5+4*d,T.light.intensity=0.6+0.8*d,T.outer.position.x=T.pos.x+Math.sin(y*6+T.phase)*0.04,T.outer.position.z=T.pos.z+Math.cos(y*8+T.phase)*0.04,T.outer.scale.x=0.9+0.2*Math.sin(y*5+T.phase*0.7),T.outer.scale.z=0.9+0.2*Math.cos(y*7+T.phase),T.outer.scale.y=0.8+0.4*Math.sin(y*9+T.phase),T.inner.position.copy(T.outer.position),T.inner.position.y=T.baseY+Math.sin(y*6+T.phase)*0.04,T.core)T.core.position.copy(T.inner.position),T.core.position.y=T.baseY-0.1+Math.sin(y*10+T.phase)*0.02,T.core.material.opacity=0.3+0.5*d;T.light.position.copy(T.outer.position),T.light.position.y=4.2}for(let T of C)T.mesh.position.y=T.baseHeight+Math.sin(y*0.5+T.phase)*0.08,T.light.position.y=T.mesh.position.y}}}function HX(J){let Q=new bJ,$=7,K=6,W=0.5,Z=0.54,X=-2.75,Y=1.6,H=-3.06,U=-3.2,G=3.2,O=0,q=new A0({color:1706037,roughness:0.5,metalness:0.6,emissive:656416,emissiveIntensity:0.12}),R=new A0({color:918560,roughness:0.6,metalness:0.5,emissive:328208,emissiveIntensity:0.08}),V=new K0(new D0(7.8,0.2,6.6),R);V.position.set(0,0.1,0.1),V.castShadow=!0,V.receiveShadow=!0,Q.add(V);let I=new K0(new D0(7.5,0.175,6.3),q);I.position.set(0,0.275,0.05),I.castShadow=!0,I.receiveShadow=!0,Q.add(I);let E=new K0(new D0(7,0.125,6),q);E.position.set(0,0.425,0),E.castShadow=!0,E.receiveShadow=!0,Q.add(E);let N=new A0({color:16766720,roughness:0.15,metalness:0.92,emissive:8939008,emissiveIntensity:0.2}),P=new K0(new D0(7.65,0.05,6.45),N);P.position.set(0,0.2,0.08),Q.add(P);let M=new K0(new D0(7.25,0.05,6.15),N);M.position.set(0,0.35,0.03),Q.add(M);let _=new A0({color:3807829,roughness:0.95,metalness:0.02,emissive:1706544,emissiveIntensity:0.25}),C=new K0(new D0(6.5,0.04,6),_);C.position.set(0,0.52,0),C.receiveShadow=!0,Q.add(C);let w=3.2,k=-1.2,z=1,o=1.2,j=0.08,l=0.54+j,e=-1.5,c=0.45,r=0.5,Q0=e-c/2,u=e+c/2,y=k+w/2,T=k-w/2,f=e,v=new A0({color:13404415,emissive:11158783,emissiveIntensity:1.5,transparent:!0,opacity:0.6,side:PJ}),d=new K0(new m8(0.2,0.4,20,1),v);d.position.set(0,0.53,f),d.rotation.x=-Math.PI/2,Q.add(d);let J0=new bJ,i=3.3,B=2.9000000000000004,Z0=f,N0=new A0({color:6706602,roughness:0.3,metalness:0.8,emissive:4465322,emissiveIntensity:0.2}),F0=new K0(new D0(B*2+0.5,0.04,0.04),N0);F0.position.set(0,i,Z0),J0.add(F0);let k0=new A0({color:8943564,roughness:0.2,metalness:0.9,emissive:6702250,emissiveIntensity:0.3});for(let q0 of[-1,1]){let v0=new K0(new z8(0.06,6,6),k0);v0.position.set(q0*(B+0.25),i,Z0),J0.add(v0)}let l0=new A0({color:13404415,emissive:11158783,emissiveIntensity:2}),C0=new K0(new B7(0.1,0),l0);C0.position.set(0,i,Z0),J0.add(C0);let b0=new _J({color:16777215,transparent:!0,opacity:0.6}),c0=new K0(new B7(0.05,0),b0);c0.position.set(0,i,Z0),J0.add(c0);let s0=new _J({color:13404415,transparent:!0,opacity:0.08,side:PJ}),x0=new K0(new D0(0.02,i-0.5,0.02),s0);x0.position.set(0,0.5+(i-0.5)/2,Z0),J0.add(x0);let UJ=new _J({color:13404415,transparent:!0,opacity:0.15,side:PJ}),i0=new K0(new m8(0.1,0.25,16,1),UJ);i0.rotation.x=-Math.PI/2,i0.position.set(0,0.52,Z0),J0.add(i0);let qJ={slider:C0,innerSlider:c0,beam:x0,target:i0,railY:i,railSpan:B};Q.add(J0);let YJ=new bJ,GJ=new A0({color:3809376,roughness:0.4,metalness:0.6,emissive:1706544,emissiveIntensity:0.3}),HJ=new A0({color:13404415,roughness:0.2,metalness:0.8,emissive:11158783,emissiveIntensity:0.6}),b=new A0({color:4469640,roughness:0.3,metalness:0.7,emissive:2232678,emissiveIntensity:0.4}),gJ=3.2-r/2,e0=new K0(new D0(gJ,j,w),GJ);e0.position.set(-(r/2+gJ/2),0.54+j/2,k),e0.castShadow=!0,e0.receiveShadow=!0,YJ.add(e0);let h=new K0(new D0(gJ,j,w),GJ);h.position.set(r/2+gJ/2,0.54+j/2,k),h.castShadow=!0,h.receiveShadow=!0,YJ.add(h);let D=6.4,F=j+0.06,A=new K0(new D0(D,F,0.06),HJ);A.position.set(0,0.54+F/2,k+w/2),YJ.add(A);let x=j+0.22,X0=0.54+x/2,U0=new K0(new D0(D,x,0.06),b);U0.position.set(0,X0,k-w/2),U0.castShadow=!0,YJ.add(U0);for(let q0 of[-1,1]){let v0=j+0.12,d0=new K0(new D0(0.06,v0,w),b);d0.position.set(q0*(D/2),0.54+v0/2,k),YJ.add(d0)}let R0=new A0({color:13404415,emissive:11158783,emissiveIntensity:1.5}),t=new K0(new D0(D,0.02,0.02),R0);t.position.set(0,0.54+j+0.01,k+w/2+0.02),YJ.add(t),Q.add(YJ);let $0=k,O0=k,S0=0,L0=-1,G0=2.8,h0=-3.0500000000000003,m0=new A0({color:2757734,roughness:0.4,metalness:0,transparent:!0,opacity:0.2,side:PJ,emissive:656416,emissiveIntensity:0.18,depthWrite:!1}),KJ=new K0(new D0(7.3,G0,0.2),m0);KJ.position.set(0,0.5+G0/2,-3.06),KJ.castShadow=!1,KJ.receiveShadow=!1,KJ.renderOrder=1,Q.add(KJ);let g=new _J({color:10181046,transparent:!0,opacity:0.08,blending:b8,side:PJ,depthWrite:!1}),V0=new K0(new p8(7.25,G0-0.1),g);V0.position.set(0,0.5+G0/2,-3.02),V0.renderOrder=2,Q.add(V0);let W0=new A0({color:16766720,emissive:16755200,emissiveIntensity:2.2}),M0=0.06,w0=7.25,Y0=G0+0.1;[{x:0,y:0.5+G0+0.07,w:w0},{x:0,y:0.44,w:w0}].forEach(({x:q0,y:v0,w:d0})=>{let ZJ=new K0(new D0(d0,M0,M0),W0);ZJ.position.set(q0,v0,-3.0100000000000002),Q.add(ZJ)}),[{x:-w0/2+M0/2},{x:w0/2-M0/2}].forEach(({x:q0})=>{let v0=new K0(new D0(M0,Y0,M0),W0);v0.position.set(q0,0.5+G0/2,-3.0100000000000002),Q.add(v0)});let E0=new bJ;E0.position.set(0,2.05,-2.99),Q.add(E0);let a0=new A0({color:16766720,emissive:13142528,emissiveIntensity:1.4,roughness:0.12,metalness:0.95}),AJ=new K0(new pJ(0.78,0.78,0.16,32),a0);AJ.rotation.z=Math.PI/2,E0.add(AJ);let OJ=new A0({color:16774307,emissive:16766720,emissiveIntensity:1.8}),Z8=new K0(new u9(0.62,0.025,8,32),OJ);Z8.rotation.y=Math.PI/2,Z8.position.z=0.085,E0.add(Z8);let N8=new K0(new u9(0.5,0.02,8,24),OJ);N8.rotation.y=Math.PI/2,N8.position.z=0.09,E0.add(N8);let l8=new A0({color:16774307,emissive:16766720,emissiveIntensity:2.6}),_7=new K0(new D0(0.06,0.6,0.04),l8);_7.position.set(0,0,0.09),E0.add(_7);let a9=new K0(new D0(0.24,0.06,0.04),l8);a9.position.set(0,0.22,0.09),E0.add(a9);let N6=new K0(new D0(0.24,0.06,0.04),l8);N6.position.set(0,-0.22,0.09),E0.add(N6);let I9=new K0(new D0(0.13,0.05,0.04),l8);I9.position.set(-0.04,0.07,0.09),E0.add(I9);let P9=new K0(new D0(0.13,0.05,0.04),l8);P9.position.set(0.04,-0.07,0.09),E0.add(P9),[-0.09].forEach((q0)=>{let v0=new K0(new D0(0.13,0.05,0.04),l8);v0.position.set(-I9.position.x,-I9.position.y,q0),E0.add(v0);let d0=new K0(new D0(0.13,0.05,0.04),l8);d0.position.set(-P9.position.x,-P9.position.y,q0),E0.add(d0)});let c8=new _J({color:16770688,transparent:!0,opacity:0.2,side:PJ,blending:b8}),A9=new K0(new r7(1.05,32),c8);A9.position.set(0,0,-0.06),E0.add(A9);let C7=[],X9=new A0({color:16755200,emissive:8930304,emissiveIntensity:0.6}),r9=0.5+G0-0.32;for(let q0=0;q0<7;q0++){let v0=-2.7+q0*0.9,d0=new bJ;d0.position.set(v0,r9,-3);let ZJ=new K0(new D0(0.07,0.45,0.04),X9.clone());d0.add(ZJ);let vJ=new K0(new D0(0.36,0.07,0.04),X9.clone());vJ.position.y=0.18,d0.add(vJ);let jJ=new K0(new D0(0.36,0.07,0.04),X9.clone());jJ.position.y=-0.18,d0.add(jJ);let yJ=new K0(new D0(0.18,0.06,0.04),X9.clone());yJ.position.set(-0.045,0.05,0),d0.add(yJ);let zJ=new K0(new D0(0.18,0.06,0.04),X9.clone());zJ.position.set(0.045,-0.05,0),d0.add(zJ),Q.add(d0),C7.push({meshes:[ZJ,vJ,jJ,yJ,zJ],phase:q0*0.18})}let T7=[],Y9=new A0({color:16766720,emissive:16774307,emissiveIntensity:1.5}),G6=1.35;for(let q0=0;q0<13;q0++){let v0=-3.3+q0*0.55,d0=new bJ;d0.position.set(v0,G6,-3);let ZJ=new K0(new D0(0.04,0.22,0.03),Y9.clone());d0.add(ZJ);let vJ=new K0(new D0(0.16,0.04,0.03),Y9.clone());vJ.position.y=0.08,d0.add(vJ);let jJ=new K0(new D0(0.16,0.04,0.03),Y9.clone());jJ.position.y=-0.08,d0.add(jJ),Q.add(d0),T7.push({meshes:[ZJ,vJ,jJ],phase:q0*0.16})}let S7=[];[-1.65,1.65].forEach((q0,v0)=>{let d0=new A0({color:16766720,roughness:0.18,metalness:0.92,emissive:13404160,emissiveIntensity:0.7}),ZJ=new K0(new pJ(0.15,0.18,2.2,12),d0);ZJ.position.set(q0,1.8,-3),Q.add(ZJ);let vJ=new K0(new pJ(0.22,0.18,0.18,12),d0);vJ.position.set(q0,3,-3),Q.add(vJ);let jJ=new K0(new pJ(0.22,0.24,0.12,12),d0);jJ.position.set(q0,0.75,-3),Q.add(jJ);let yJ=new K0(new z8(0.1,16,16),new _J({color:16770688,transparent:!0,opacity:0.85}));yJ.position.set(q0,3.2,-3),Q.add(yJ);let zJ=[16720452,4521864,4491519,16755234,13395711];for(let IJ=0;IJ<5;IJ++){let nJ=new A0({color:zJ[IJ%zJ.length],emissive:zJ[IJ%zJ.length],emissiveIntensity:0.45,roughness:0.3,metalness:0.5}),k8=new K0(new pJ(0.2,0.2,0.045,12),nJ);k8.position.set(q0+(v0===0?-0.4:0.4),0.9+IJ*0.05,-2.96),Q.add(k8)}S7.push({orb:yJ,phase:v0*0.5})}),[-3.25,3.25].forEach((q0)=>{let v0=new bJ;v0.position.set(q0,2.55,-2.99);let d0=new A0({color:16766720,emissive:16755200,emissiveIntensity:2.2}),ZJ=new K0(new D0(0.08,0.78,0.05),d0);v0.add(ZJ);let vJ=new K0(new D0(0.32,0.08,0.05),d0);vJ.position.y=0.28,v0.add(vJ);let jJ=new K0(new D0(0.32,0.08,0.05),d0);jJ.position.y=-0.28,v0.add(jJ);let yJ=new K0(new D0(0.18,0.06,0.05),d0);yJ.position.set(-0.05,0.1,0),v0.add(yJ);let zJ=new K0(new D0(0.18,0.06,0.05),d0);zJ.position.set(0.05,-0.1,0),v0.add(zJ),Q.add(v0)});let y8=new bJ;y8.position.set(-3.3,1.55,-3);let zQ=new A0({color:16766720,emissive:11167232,emissiveIntensity:1.4,metalness:0.92,roughness:0.2}),IQ=new K0(new u9(0.46,0.045,12,24),zQ);y8.add(IQ);let F6=new K0(new pJ(0.43,0.43,0.02,24),new A0({color:2756624,roughness:0.5,metalness:0.3,emissive:1115397,emissiveIntensity:0.3}));F6.rotation.x=Math.PI/2,y8.add(F6);for(let q0=0;q0<8;q0++){let v0=q0/8*Math.PI*2,d0=q0%2===0?16720452:1118481,ZJ=new K0(new pJ(0.075,0.075,0.06,8),new A0({color:d0,emissive:d0,emissiveIntensity:0.6,metalness:0.4,roughness:0.4}));ZJ.position.set(Math.cos(v0)*0.27,Math.sin(v0)*0.27,0),ZJ.rotation.x=Math.PI/2,y8.add(ZJ)}let L=new K0(new z8(0.08,16,16),new A0({color:16766720,emissive:16755200,emissiveIntensity:1.4,metalness:0.92,roughness:0.2}));L.position.z=0.05,y8.add(L);let m=new K0(new Q9(0.07,0.18,8),new A0({color:16729156,emissive:16720418,emissiveIntensity:1.6}));m.position.set(0,0.55,0.05),y8.add(m),Q.add(y8);let a=new bJ;a.position.set(3.3,1.55,-2.99);let s=new A0({color:16772846,roughness:0.3,metalness:0.15,emissive:2236962,emissiveIntensity:0.12}),n=new K0(new D0(0.42,0.42,0.42),s);n.rotation.set(0.3,0.4,0.18),a.add(n);for(let[q0,v0,d0]of[[-0.13,0.13,0.21],[0,0,0.21],[0.13,-0.13,0.21]]){let ZJ=new K0(new z8(0.028,8,8),new _J({color:2236962}));ZJ.position.set(q0,v0,d0),n.add(ZJ)}Q.add(a),Q.userData=Q.userData||{},Q.userData.wallAnims={heroCoinGroup:E0,halo:A9,jackpotLetters:C7,dollarBulbs:T7,sideColumns:S7,wheelGroup:y8,frameGoldMat:W0};let I0=new A0({color:1706037,roughness:0.4,metalness:0.7,emissive:656416,emissiveIntensity:0.1}),T0=new A0({color:3351142,roughness:0.25,metalness:0.9,emissive:2232661,emissiveIntensity:0.2}),B0=3.2;[-3.75,3.75].forEach((q0,v0)=>{let d0=new K0(new D0(0.4,B0,6.4),I0);d0.position.set(q0,0.5+B0/2,0),d0.castShadow=!0,Q.add(d0);let ZJ=new K0(new D0(0.42,B0,0.05),T0);ZJ.position.set(q0,0.5+B0/2,3.15),Q.add(ZJ);let vJ=new K0(new D0(0.44,B0*0.8,0.03),new A0({color:16766720,emissive:11171584,emissiveIntensity:0.3,metalness:0.92,roughness:0.15}));vJ.position.set(q0,0.5+B0*0.6,3.16),Q.add(vJ);let jJ=new _J({color:524818,transparent:!0,opacity:0.4});for(let yJ=0;yJ<4;yJ++){let zJ=new K0(new D0(0.04,0.55,0.01),jJ);zJ.position.set(q0+(v0===0?0.1:-0.1),2.3+yJ*0.7,-1.5),Q.add(zJ)}});let j0=new t7({color:12312063,transparent:!0,opacity:0.06,roughness:0.02,metalness:0,side:PJ,depthWrite:!1}),y0=new K0(new D0(6.8,2.2,0.04),j0);y0.position.set(0,2.3,2.4),y0.renderOrder=4,Q.add(y0);let o0=new K0(new D0(7.3,2.5,0.06),new t7({color:14531583,transparent:!0,opacity:0.04,roughness:0.05,metalness:0,side:PJ,depthWrite:!1}));o0.position.set(0,2.5,-2.94),o0.renderOrder=3,Q.add(o0);let JJ=new A0({color:8943564,roughness:0.2,metalness:0.8,emissive:4469674,emissiveIntensity:0.1});[[-3.65,2.4],[3.65,2.4]].forEach(([q0,v0])=>{let d0=new K0(new D0(0.06,2.3,0.06),JJ);d0.position.set(q0,2.3,v0),Q.add(d0)});let f0=3,NJ=[{type:"hole",width:1},{type:"win",width:4.4},{type:"hole",width:1}],MJ=[],LJ=-3.2;for(let q0=0;q0<f0;q0++){let v0=NJ[q0].width;MJ.push({startX:LJ,endX:LJ+v0,centerX:LJ+v0/2,type:NJ[q0].type,width:v0}),LJ+=v0}let DJ=new A0({color:13080,roughness:0.7,metalness:0.1,emissive:65348,emissiveIntensity:0.15}),lJ=new A0({color:65382,emissive:65348,emissiveIntensity:0.8,transparent:!0,opacity:0.35,side:PJ}),_0=new A0({color:65416,emissive:65348,emissiveIntensity:1.5,transparent:!0,opacity:0.5}),X8=new A0({color:65416,emissive:65348,emissiveIntensity:3}),WJ=new A0({color:52292,emissive:65348,emissiveIntensity:2,transparent:!0,opacity:0.7});MJ.forEach((q0)=>{if(q0.type!=="win")return;let v0=new K0(new D0(q0.width-0.04,0.5,1.2),DJ);v0.position.set(q0.centerX,0.25,2.6),Q.add(v0);let d0=new K0(new D0(q0.width-0.06,0.02,1.18),lJ);d0.position.set(q0.centerX,0.42,2.6),Q.add(d0);let ZJ=new K0(new D0(q0.width-0.04,0.008,1.2),_0);ZJ.position.set(q0.centerX,0.435,2.6),Q.add(ZJ);for(let yJ of[-1,1]){let zJ=new K0(new D0(q0.width-0.02,0.04,0.05),WJ);zJ.position.set(q0.centerX,0.53,2.6+yJ*0.58),Q.add(zJ)}for(let yJ of[-1,1]){let zJ=new K0(new D0(0.04,0.04,1.2),WJ);zJ.position.set(q0.centerX+yJ*(q0.width/2-0.02),0.53,2.6),Q.add(zJ)}let vJ=new A0({color:65348,emissive:65314,emissiveIntensity:0.4,transparent:!0,opacity:0.2}),jJ=new K0(new D0(q0.width-0.25,0.35,0.9),vJ);jJ.position.set(q0.centerX,0.35,2.6),Q.add(jJ)});let Y8=new A0({color:655368,roughness:1,metalness:0,emissive:3342353,emissiveIntensity:0.2}),E8=new A0({color:16711731,emissive:16711714,emissiveIntensity:0.6,transparent:!0,opacity:0.3,side:PJ}),v8=new A0({color:16720452,emissive:16711731,emissiveIntensity:1,transparent:!0,opacity:0.4}),w9=new A0({color:16720452,emissive:16711748,emissiveIntensity:3}),FJ=new A0({color:16711731,emissive:16711714,emissiveIntensity:2,transparent:!0,opacity:0.7});MJ.forEach((q0)=>{if(q0.type!=="hole")return;let v0=new K0(new D0(q0.width-0.04,0.65,1.2),Y8);v0.position.set(q0.centerX,0.175,2.6),Q.add(v0);let d0=new K0(new D0(q0.width-0.06,0.02,1.18),E8);d0.position.set(q0.centerX,0.42,2.6),Q.add(d0);let ZJ=new K0(new D0(q0.width-0.04,0.008,1.2),v8);ZJ.position.set(q0.centerX,0.435,2.6),Q.add(ZJ);for(let nJ of[-1,1]){let k8=new K0(new D0(q0.width-0.02,0.04,0.05),FJ);k8.position.set(q0.centerX,0.53,2.6+nJ*0.58),Q.add(k8)}for(let nJ of[-1,1]){let k8=new K0(new D0(0.04,0.04,1.2),FJ);k8.position.set(q0.centerX+nJ*(q0.width/2-0.02),0.53,2.6),Q.add(k8)}let vJ=new A0({color:4456465,emissive:16711714,emissiveIntensity:0.15,transparent:!0,opacity:0.15}),jJ=new K0(new D0(q0.width-0.25,0.45,0.9),vJ);jJ.position.set(q0.centerX,0.275,2.6),Q.add(jJ);let yJ=new _J({color:16711714,transparent:!0,opacity:0.2,side:PJ}),zJ=new K0(new D0(0.2,0.003,0.2),yJ);zJ.position.set(q0.centerX,0.53,2.6),zJ.rotation.y=Math.PI/4,Q.add(zJ);let IJ=new K0(new D0(0.2,0.003,0.2),yJ);IJ.position.set(q0.centerX,0.53,2.6),IJ.rotation.y=-Math.PI/4,Q.add(IJ)});let SJ=new A0({color:1706037,roughness:0.3,metalness:0.7,emissive:656416,emissiveIntensity:0.12}),R8=new K0(new D0(7.8,0.4,1),SJ);R8.position.set(0,0.3,3.3),R8.castShadow=!0,Q.add(R8);let kJ=new A0({color:2756672,roughness:0.95,metalness:0.02,emissive:1706544,emissiveIntensity:0.15}),A8=new K0(new D0(7.5,0.02,0.8),kJ);A8.position.set(0,0.49,3.25),Q.add(A8);let H9=new A0({color:16766720,roughness:0.1,metalness:0.9,emissive:8939008,emissiveIntensity:0.3}),j7=new K0(new D0(7.6,0.04,0.08),H9);j7.position.set(0,0.53,3.03),Q.add(j7);let bX=new A0({color:2232644,roughness:0.2,metalness:0.8,emissive:1116211,emissiveIntensity:0.3,side:PJ}),mK=6.7,xX=0.55,gX=0.5,pX=0.35,mX=new D0(mK,xX,gX),y7=new K0(mX,bX);y7.position.set(0,0.6799999999999999,2.5),y7.rotation.x=pX,y7.castShadow=!0,y7.receiveShadow=!0,Q.add(y7);let dX=new A0({color:13404415,emissive:11158783,emissiveIntensity:2}),dK=new K0(new D0(mK-0.1,0.015,0.015),dX);dK.position.set(0,0.9199999999999999,2.42),Q.add(dK);let O6=k+w/2+0.2,PQ=1.2,D6=0.18,AQ=PQ-O6,uX=new A0({color:3807829,roughness:0.6,metalness:0.3,emissive:1706544,emissiveIntensity:0.2}),E6=new K0(new D0(6.5,0.02,AQ),uX);E6.position.set(0,0.54-D6/2,O6+AQ/2),E6.rotation.x=Math.atan2(D6,AQ),E6.receiveShadow=!0,Q.add(E6);let uK=new A0({color:13404415,emissive:11158783,emissiveIntensity:1}),lK=new K0(new D0(6.5,0.03,0.03),uK);lK.position.set(0,0.55,O6),Q.add(lK);let cK=new K0(new D0(6.5,0.03,0.03),uK);cK.position.set(0,0.54-D6+0.01,PQ),Q.add(cK);let lX=new A0({color:4517631,emissive:2280703,emissiveIntensity:1.2});[[-3.2,-2.6,4.5],[3.2,-2.6,4.5]].forEach(([q0,v0,d0])=>{let ZJ=new K0(new D0(0.02,0.02,d0),lX);ZJ.position.set(q0,0.8,v0),Q.add(ZJ)}),J.add(Q);let wQ=0;function cX(q0){let v0=Math.sin(q0*0.6)*(B-0.2);wQ=v0;let d0=q0*o,ZJ=Math.sin(d0),vJ=ZJ>0?Math.pow(ZJ,1.3):-Math.pow(-ZJ,0.7),jJ=k+vJ*z;C0.position.x=v0,c0.position.x=v0,x0.position.x=v0,x0.position.z=Z0,x0.position.y=0.5+(i-0.5)/2,x0.scale.y=1+Math.sin(q0*0.6)*0.1,i0.position.x=v0,i0.position.z=Z0;let yJ=0.8+0.2*Math.sin(q0*1.2);i0.material.opacity=0.1+0.15*yJ,C0.position.y=i+Math.sin(q0*2+v0)*0.02,c0.position.y=C0.position.y,C0.rotation.x=q0*0.5,C0.rotation.y=q0*0.3,c0.rotation.x=C0.rotation.x,c0.rotation.y=C0.rotation.y,O0=$0,$0=jJ;let zJ=Math.max(q0-L0,0.001);if(L0<0)S0=0;else S0=($0-O0)/zJ;L0=q0,YJ.position.z=$0-k,d.position.x=wQ;let IJ=Q.userData&&Q.userData.wallAnims;if(IJ){if(IJ.heroCoinGroup)IJ.heroCoinGroup.rotation.y=q0*0.35;if(IJ.halo){let nJ=Math.sin(q0*1.4);IJ.halo.material.opacity=0.18+0.12*nJ,IJ.halo.scale.setScalar(1+0.08*nJ)}if(IJ.jackpotLetters)for(let nJ of IJ.jackpotLetters){let k8=1+1.6*Math.sin(q0*2.4+nJ.phase);for(let _Q of nJ.meshes)_Q.material.emissiveIntensity=k8}if(IJ.dollarBulbs)for(let nJ of IJ.dollarBulbs){let k8=1.2+2*Math.sin(q0*2.8+nJ.phase);for(let _Q of nJ.meshes)_Q.material.emissiveIntensity=k8}if(IJ.sideColumns)for(let nJ of IJ.sideColumns)nJ.orb.material.opacity=0.6+0.4*Math.sin(q0*2+nJ.phase);if(IJ.wheelGroup)IJ.wheelGroup.rotation.z=-q0*0.4;if(IJ.frameGoldMat)IJ.frameGoldMat.emissiveIntensity=1.6+1*Math.sin(q0*0.9)}}return{group:Q,width:7,depth:6,height:0.5,surfaceY:0.54,backZ:-2.75,frontDropZ:1.6,leftX:-3.2,rightX:3.2,winZ:2.6,zones:MJ,getZoneType(q0){for(let v0 of MJ)if(q0>=v0.startX&&q0<v0.endX)return v0.type;return"hole"},mechX:0,get dropX(){return wQ},dropZ:f,dropHeight:3.5,updateMechanism:cX,get shelfZ(){return $0},get shelfVelocity(){return S0},get shelfFrontZ(){return $0+w/2},get shelfBackZ(){return $0-w/2},shelfSurfaceY:l,shelfThickness:j,slotCenterZ:e,slotBackZ:Q0,slotFrontZ:u,slotWidth:r,slotHalfWidth:r/2,shelfAmplitude:z,shelfSpeed:o,shelfNeutralZ:k,shelfDepth:w,slopeStartZ:O6,slopeEndZ:PQ,slopeDrop:D6}}var $8=0.06,pN=0.5,mN=0.22,o9=0.01,dN=0.2,uN=0.28,Z6=0.008,X6=6000,UX=0.987,O8=0.3,qX=14,NX=0.1,GX=0.35,kQ=2.5,K8=0.28,lN=0.25,cN=0.15,FX=0,nN=6,z9=0.6;function OX(J,Q,$=0){FX=$;let K=[],W=new bJ;J.add(W);let Z=new pJ(K8,K8,$8,24),X=new D0(pN,o9,mN),Y=new D0(dN,Z6,uN),H={coin:[new A0({color:16766720,roughness:0.1,metalness:0.9,emissive:11167232,emissiveIntensity:0.12}),new A0({color:15645474,roughness:0.15,metalness:0.85,emissive:8939008,emissiveIntensity:0.08}),new A0({color:16773222,roughness:0.08,metalness:0.9,emissive:13412864,emissiveIntensity:0.15})],bill:[new A0({color:2289271,roughness:0.2,metalness:0.1,emissive:34884,emissiveIntensity:0.12}),new A0({color:6750105,roughness:0.15,metalness:0.1,emissive:43605,emissiveIntensity:0.18}),new A0({color:1166421,roughness:0.25,metalness:0.1,emissive:26163,emissiveIntensity:0.08})],card:[new A0({color:16777215,roughness:0.1,metalness:0,emissive:6702250,emissiveIntensity:0.05}),new A0({color:16772829,roughness:0.1,metalness:0,emissive:8934860,emissiveIntensity:0.08})]};function U(y){if(y==="coin")return K8;if(y==="dollar")return lN;return cN}function G(y){if(y==="coin")return $8/2;if(y==="dollar")return o9/2;return Z6/2}let O=new Map;function q(){O.clear()}function R(y,T){return y*73856093^T*19349663}function V(y){let T=Math.floor(y.x/z9),f=Math.floor(y.z/z9),v=R(T,f),d=O.get(v);if(!d)d=[],O.set(v,d);d.push(y)}function I(y){let T=Math.floor(y.x/z9),f=Math.floor(y.z/z9),v=[];for(let d=-1;d<=1;d++)for(let J0=-1;J0<=1;J0++){let i=O.get(R(T+d,f+J0));if(i)for(let B=0;B<i.length;B++)v.push(i[B])}return v}function E(y,T="coin"){let f=new _J({color:0,transparent:!0,opacity:0.25});if(T==="coin"){let v=new K0(new D0(0.01,0.003,0.05),f);v.position.set(-0.04,$8/2+0.001,0),y.add(v);let d=new K0(new D0(0.035,0.003,0.01),f);d.position.set(-0.04,$8/2+0.001,0.02),y.add(d);let J0=new K0(new D0(0.035,0.003,0.01),f);J0.position.set(-0.04,$8/2+0.001,-0.02),y.add(J0);let i=new K0(new D0(0.01,0.003,0.05),f);i.position.set(0.06,$8/2+0.001,0),y.add(i);let B=new K0(new D0(0.025,0.003,0.01),f);B.position.set(0.06,$8/2+0.001,-0.03),y.add(B);let Z0=new _J({color:0,transparent:!0,opacity:0.1}),N0=new K0(new m8(0.025,0.035,12,1),Z0);N0.position.set(-0.04,$8/2+0.002,0),N0.rotation.x=-Math.PI/2,y.add(N0)}else{let v=new K0(new D0(0.015,0.003,0.08),f);v.position.set(0,o9/2+0.002,0),y.add(v);let d=new K0(new D0(0.06,0.003,0.015),f);d.position.set(0,o9/2+0.002,0.035),y.add(d);let J0=new K0(new D0(0.06,0.003,0.015),f);J0.position.set(0,o9/2+0.002,-0.035),y.add(J0)}}function N(y,T,f){let v=new K0(Z,H.coin[Math.floor(Math.random()*3)]);return v.position.set(y,f,T),v.rotation.y=Math.random()*Math.PI*2,v.castShadow=!0,v.receiveShadow=!0,W.add(v),E(v,"coin"),v}function S(y,T,f){let v=new K0(X,H.bill[Math.floor(Math.random()*3)]);return v.position.set(y,f,T),v.rotation.y=Math.random()*Math.PI*2,v.castShadow=!0,v.receiveShadow=!0,W.add(v),E(v,"dollar"),v}function P(y,T){let f=Q.surfaceY+Z6/2+0.01,v=H.card[Math.floor(Math.random()*2)],d=new K0(Y,v);d.position.set(y,f,T),d.rotation.y=Math.random()*Math.PI*2,d.castShadow=!0,d.receiveShadow=!0,W.add(d);let J0=new _J({color:16720452,transparent:!0,opacity:0.15}),i=new K0(new D0(0.04,0.003,0.04),J0);i.position.set(0,Z6/2+0.001,0),d.add(i);let B=`card_${++FX}`;return d.userData={isCard:!0,cardId:B,collected:!1},d}function M(y,T,f,v,d="sliding"){let J0;if(y==="card")J0=P(T,f),v=J0.position.y,d="floating";else if(y==="dollar")J0=S(T,f,v);else J0=N(T,f,v);let i={mesh:J0,type:y,x:T,y:v,z:f,vx:0,vy:0,vz:0,state:d,spin:0,_dropTime:0,_slotTimer:0};return K.push(i),i}function _(y=55,T=6){w();let f=Math.floor(y*0.6);for(let v=0;v<Math.min(f,X6);v++){let d=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),J0=Q.shelfBackZ+0.2+Math.random()*(Q.shelfAmplitude*1.2),i=Q.shelfSurfaceY+$8/2,B=M("coin",d,J0,i,"sliding");B.onShelf=!0,B.vz=(Math.random()-0.5)*0.05}for(let v=0;v<Math.min(y-f,X6);v++){let d=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),J0=Q.frontDropZ-0.5+Math.random()*0.8;M("coin",d,J0,Q.surfaceY+$8/2,"sliding")}for(let v=0;v<Math.min(T,X6-y);v++){let d=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),J0=Q.shelfBackZ+0.3+Math.random()*(Q.shelfDepth*0.5),i=M("dollar",d,J0,Q.shelfSurfaceY+o9/2,"sliding");i.onShelf=!0}for(let v=0;v<3;v++){let d=Q.leftX+0.5+Math.random()*(Q.rightX-Q.leftX-1),J0=Q.shelfBackZ+0.5+Math.random()*(Q.shelfDepth*0.5),i=M("card",d,J0);i.vz=0.06+Math.random()*0.07}for(let v=0;v<8;v++)o(),l();for(let v of K)if(v.state==="sliding"){let d=G(v.type);v.y=(v.onShelf?Q.shelfSurfaceY:Q.surfaceY)+d}C(2)}function C(y){for(let T=0;T<y;T++){let f=Q.leftX+0.8+Math.random()*(Q.rightX-Q.leftX-1.6),v=Q.backZ+0.5+Math.random()*(Q.frontDropZ-Q.backZ-2),d=6+Math.floor(Math.random()*6);for(let J0=0;J0<d;J0++){let i=Math.sin(J0*0.3)*0.006,B=Math.cos(J0*0.4)*0.006,Z0=Q.surfaceY+$8/2+J0*($8+0.001),N0=M("coin",f+i,v+B,Z0,"sliding");N0.vy=0}}}function w(){K.forEach((y)=>W.remove(y.mesh)),K.length=0}function k(y){if(y.onShelf)return Q.shelfSurfaceY;return Q.surfaceY}function z(y){let T=K8*4;for(let f=0;f<K.length;f++){let v=K[f];if(v===y||v.onShelf||v.state!=="sliding")continue;let d=v.x-y.x,J0=v.z-y.z,i=Math.sqrt(d*d+J0*J0);if(i<T&&i>0.01){let B=(1-i/T)*0.3;v.vx+=d/i*B,v.vz+=J0/i*B*0.5}}}function o(){q();for(let T=0;T<K.length;T++){let f=K[T];if(f.state==="dropping"||f.state==="falling")continue;V(f)}let y=new Set;for(let T=0;T<K.length;T++){let f=K[T];if(f.state==="dropping"||f.state==="falling")continue;if(f.state==="floating")continue;let v=I(f);for(let d=0;d<v.length;d++){let J0=v[d];if(J0===f)continue;let i=f<J0?T:K.indexOf(J0),B=T<i?`${T}:${i}`:`${i}:${T}`;if(y.has(B))continue;y.add(B);let Z0=U(f.type),N0=U(J0.type),F0=Z0+N0+0.02,k0=J0.x-f.x,l0=J0.z-f.z,C0=Math.sqrt(k0*k0+l0*l0);if(C0<F0&&C0>0.001){let b0=F0-C0,c0=k0/C0,s0=l0/C0;if(f.state==="falling"&&J0.state==="sliding")J0.vz+=b0*0.3,J0.vx+=(Math.random()-0.5)*b0*0.15,f.vx-=c0*b0*0.15,f.vz-=s0*b0*0.15;else if(J0.state==="falling"&&f.state==="sliding")f.vz+=b0*0.3,f.vx+=(Math.random()-0.5)*b0*0.15,J0.vx-=c0*b0*0.15,J0.vz-=s0*b0*0.15;else{let x0=b0*0.3;f.x-=c0*x0,f.z-=s0*x0,J0.x+=c0*x0,J0.z+=s0*x0;let UJ=(J0.vx-f.vx)*c0+(J0.vz-f.vz)*s0;if(UJ<0){let i0=UJ*O8*0.5;f.vx+=i0*c0,f.vz+=i0*s0,J0.vx-=i0*c0,J0.vz-=i0*s0}}}}}for(let T=0;T<K.length;T++){let f=K[T];if(f.type==="card")continue;if(Math.abs(f.vx)>kQ)f.vx=Math.sign(f.vx)*kQ;if(Math.abs(f.vz)>kQ)f.vz=Math.sign(f.vz)*kQ}}function j(){let y=new Map;for(let f=0;f<K.length;f++){let v=K[f];if(v.type==="card"||v.state==="falling"||v.state==="dropping")continue;let d=Math.floor(v.x/z9),J0=Math.floor(v.z/z9),i=R(d,J0),B=y.get(i);if(!B)B=[],y.set(i,B);B.push(v)}let T=new Set;for(let f=0;f<K.length;f++){let v=K[f];if(v.type==="card"||v.state==="falling"||v.state==="dropping")continue;let d=G(v.type),J0=Math.floor(v.x/z9),i=Math.floor(v.z/z9);for(let B=-1;B<=1;B++)for(let Z0=-1;Z0<=1;Z0++){let N0=y.get(R(J0+B,i+Z0));if(!N0)continue;for(let F0=0;F0<N0.length;F0++){let k0=N0[F0];if(k0===v)continue;let l0=f<K.indexOf(k0)?`${f}:${K.indexOf(k0)}`:`${K.indexOf(k0)}:${f}`;if(T.has(l0))continue;T.add(l0);let C0=U(k0.type),b0=U(v.type),c0=k0.x-v.x,s0=k0.z-v.z,x0=Math.sqrt(c0*c0+s0*s0);if(x0>b0+C0+0.01)continue;let UJ=G(k0.type),i0=k0.y-UJ,qJ=v.y+d,YJ=k0.y+UJ,GJ=v.y-d;if(qJ>i0+0.002&&GJ<i0&&GJ>i0-$8*2){let HJ=i0-d;if(v.y>HJ+0.001){if(v.y=HJ,v.vy>0)v.vy=0}}if(YJ>GJ+0.002&&i0<GJ&&i0>GJ-$8*2){let HJ=GJ-UJ;if(k0.y>HJ+0.001){if(k0.y=HJ,k0.vy>0)k0.vy=0}}if(x0<b0+C0){let HJ=d+UJ-Math.abs(v.y-k0.y);if(HJ>0.001&&Math.abs(v.y-k0.y)<d+UJ){let b=HJ*0.5;if(v.y<k0.y)v.y-=b*0.5,k0.y+=b*0.5;else v.y+=b*0.5,k0.y-=b*0.5}}}}}}function l(){for(let y=0;y<K.length;y++){let T=K[y];if(T.state==="dropping"||T.state==="falling")continue;let f=U(T.type),v=Math.max(0,(T.z-Q.backZ)/(Q.frontDropZ-Q.backZ)),d=Q.leftX+f+v*0.05,J0=Q.rightX-f-v*0.05;if(T.x<d)T.x=d,T.vx=Math.abs(T.vx)*O8*0.5;if(T.x>J0)T.x=J0,T.vx=-Math.abs(T.vx)*O8*0.5;if(T.z<Q.backZ+f)T.z=Q.backZ+f,T.vz=Math.abs(T.vz)*O8;if(T.onShelf&&T.z<Q.shelfBackZ+f+0.03)T.z=Q.shelfBackZ+f+0.03,T.vz=Math.abs(T.vz)*O8;if(!T.onShelf&&T.z<Q.backZ+f)T.z=Q.backZ+f,T.vz=Math.abs(T.vz)*O8}}function e(y){let T=Q.shelfFrontZ,f=Q.shelfBackZ-0.5,v=Math.max(0,Q.shelfVelocity)*0.8;for(let d=0;d<K.length;d++){let J0=K[d];if(J0.onShelf||J0.state!=="sliding"||J0.type==="card")continue;if(J0.z>f&&J0.z<T+1.5){let i=T-J0.z,B=Math.max(0,1-i/2);J0.vz+=v*B*y}}}function c(y=1,T="coin"){if(K.length>=X6){let i=[];for(let B=0;B<K.length&&i.length<3;B++)if(K[B].type!=="card"&&K[B].state==="sliding")i.push(B);i.reverse().forEach((B)=>{W.remove(K[B].mesh),K.splice(B,1)})}let f=Q.dropX+(Math.random()-0.5)*0.08,v=Q.dropZ,d=Q.dropHeight,J0=M(T,f,v,d,"falling");return J0.y=d,J0.vy=-0.2,J0.vz=(Math.random()-0.5)*0.05+y*0.02,J0.vx=(Math.random()-0.5)*0.05,J0.spin=6+Math.random()*3,J0._dropTime=performance.now(),J0}function r(){let y={win:{coins:0,dollars:0,cards:[]},hole:{coins:0,dollars:0,cards:[]}},T=[];for(let f=0;f<K.length;f++){let v=K[f];if(v.z>Q.winZ){let d=Q.getZoneType(v.x);if(v.type==="card")y[d].cards.push(v.mesh.userData.cardId);else if(v.type==="dollar")y[d].dollars++;else y[d].coins++;T.push(f)}}return T.reverse().forEach((f)=>{W.remove(K[f].mesh),K.splice(f,1)}),y}function Q0(y,T){let v=y/4;for(let J0=0;J0<4;J0++){for(let i=0;i<K.length;i++){let B=K[i];if(B.type==="card"||B.state==="floating")continue;if(B.state==="falling"){B.vy-=qX*v,B.y+=B.vy*v,B.x+=B.vx*v,B.z+=B.vz*v;let Z0=Math.abs(B.x)<Q.slotHalfWidth,N0=B.z>Q.slotBackZ&&B.z<Q.slotFrontZ,F0=!(Z0&&N0),k0=G(B.type),l0=Q.shelfSurfaceY+k0,C0=Q.surfaceY+k0;if(F0&&B.y<=l0){if(B.y=l0,B.vy*=-GX,Math.abs(B.vy)<=NX)B.vy=0,B.vx*=0.5,B.vz*=0.5,B.state="sliding",B.onShelf=!0,B.mesh.rotation.x=0,B.mesh.rotation.z=0}else if(B.y<=C0){if(B.y=C0,B.vy*=-GX,Math.abs(B.vy)<=NX)B.vy=0,B.vx*=0.5,B.vz*=0.5,B.state="sliding",B.onShelf=!1,B.mesh.rotation.x=0,B.mesh.rotation.z=0}}if(B.state==="dropping"){if(B.vy-=qX*v,B.x<Q.leftX+K8)B.x=Q.leftX+K8,B.vx=Math.abs(B.vx)*O8;if(B.x>Q.rightX-K8)B.x=Q.rightX-K8,B.vx=-Math.abs(B.vx)*O8;if(B.z>=Q.frontDropZ)B.vz+=4*v,B.vx*=0.98;else B.vx*=0.95,B.vz*=0.93;if(B.y+=B.vy*v,B.z+=B.vz*v,B.x+=B.vx*v,B.y<=Q.surfaceY+G(B.type)&&B.z<Q.frontDropZ)B.y=Q.surfaceY+G(B.type),B.vy=0,B.vx*=0.3,B.vz*=0.3,B.state="sliding",B.onShelf=!1,B.mesh.rotation.x=0,B.mesh.rotation.z=0}if(B.state==="sliding"){if(!B.onShelf&&B.type!=="card"){let Z0=U(B.type),N0=B.x>Q.leftX+Z0&&B.x<Q.rightX-Z0,F0=B.z>Q.shelfBackZ+Z0&&B.z<Q.shelfFrontZ-Z0;if(N0&&F0)B.onShelf=!0,B.y=Q.shelfSurfaceY+G(B.type)}if(B.onShelf){let Z0=Math.abs(B.x)<Q.slotHalfWidth,N0=B.z>Q.slotBackZ&&B.z<Q.slotFrontZ;if(performance.now()-(B._dropTime||0)<500||Z0&&N0)B._slotTimer=(B._slotTimer||0)+v;else B.vz+=Q.shelfVelocity*v*1.5}if(B.x+=B.vx*v,B.z+=B.vz*v,B.vx*=UX,B.vz*=UX,Math.abs(B.vx)<0.001)B.vx=0;if(Math.abs(B.vz)<0.001)B.vz=0;if(B.onShelf){let Z0=Q.shelfBackZ+K8+0.03;if(B.z<Z0)if(B.z=Z0,Q.shelfVelocity>0)B.vz+=Q.shelfVelocity*0.6;else B.vz=0}if(B.onShelf){let Z0=Q.shelfFrontZ-U(B.type);if(B.z>Z0){if(B.state="dropping",B.onShelf=!1,B.vy=-0.1,B.vz<0.15)B.vz=0.15;z(B)}}if(B.onShelf){let Z0=Math.abs(B.x)<Q.slotHalfWidth,N0=B.z>Q.slotBackZ&&B.z<Q.slotFrontZ;if(Z0&&N0&&Q.shelfVelocity<-0.3&&(B._slotTimer||0)>0.3)B.onShelf=!1,B.state="falling",B.vy=-0.5,B._slotTimer=0}if(!B.onShelf&&B.z>Q.frontDropZ){if(B.state="dropping",B.vy=-0.3,B.vz<0.5)B.vz=0.5}if(!B.onShelf&&B.z>Q.shelfFrontZ+U(B.type)&&B.z<Q.frontDropZ){if(Math.abs(B.y-(Q.surfaceY+G(B.type)))<0.15){let N0=Math.max(0,Math.min(1,(B.z-Q.slopeStartZ)/(Q.slopeEndZ-Q.slopeStartZ))),F0=2+N0*3;B.vz+=F0*v;let k0=Q.surfaceY+G(B.type)-N0*Q.slopeDrop;if(B.y<k0+0.01)B.y=k0}}}}o(),j(),l(),e(v);for(let i=0;i<K.length;i++){let B=K[i];if(B.type==="card"||B.state==="dropping")continue;if(B.state==="falling"){if(B.x<Q.leftX+K8)B.x=Q.leftX+K8,B.vx=Math.abs(B.vx)*O8;if(B.x>Q.rightX-K8)B.x=Q.rightX-K8,B.vx=-Math.abs(B.vx)*O8;if(B.z<Q.backZ+K8)B.z=Q.backZ+K8,B.vz=Math.abs(B.vz)*O8}if(B.state==="sliding"&&B.onShelf){let Z0=U(B.type);if(B.x<Q.leftX+Z0+0.06)B.x=Q.leftX+Z0+0.06,B.vx=Math.abs(B.vx)*O8;if(B.x>Q.rightX-Z0-0.06)B.x=Q.rightX-Z0-0.06,B.vx=-Math.abs(B.vx)*O8}}}let d=performance.now();for(let J0=0;J0<K.length;J0++){let i=K[J0];if(i.type==="card"||i.state==="floating"){i.z+=i.vz*y,i.y=Q.shelfSurfaceY+Z6/2+0.02+Math.sin(d*0.001+i.x)*0.01,i.mesh.rotation.y+=y*0.5,i.mesh.position.set(i.x,i.y,i.z);continue}if(i.state==="falling")i.mesh.rotation.y+=y*i.spin,i.mesh.rotation.x=Math.sin(d*0.01+i.x)*0.1,i.mesh.rotation.z=Math.cos(d*0.01+i.z)*0.1;else if(i.state==="dropping")i.mesh.rotation.y+=y*3,i.mesh.rotation.x+=y*2,i.mesh.rotation.z+=y*1.5;else if(i.state==="sliding"){if(Math.sqrt(i.vx*i.vx+i.vz*i.vz)>0.005)i.mesh.rotation.x+=i.vz*0.5,i.mesh.rotation.z-=i.vx*0.5;if(Math.abs(i.vz)>0.005)i.mesh.rotation.y+=i.vz*0.3}i.mesh.position.set(i.x,i.y,i.z)}u(T)}function u(y){let T=K.filter((v)=>v.type!=="card").length,f=K.filter((v)=>v.type==="card").length;if(T<15&&K.length<X6-15){let v=15-T;for(let d=0;d<v;d++){let J0=Q.leftX+0.4+Math.random()*(Q.rightX-Q.leftX-0.8),i="coin";if(Math.random()<0.12)i="dollar";else if(Math.random()<0.04&&f<nN){i="card";let N0=Q.shelfBackZ+0.5+Math.random()*(Q.shelfDepth*0.5),F0=M("card",J0,N0);F0.vz=0.06+Math.random()*0.07;continue}let B=Q.shelfBackZ+0.2+Math.random()*(Q.shelfDepth*0.5),Z0=M(i,J0,B,Q.shelfSurfaceY+(i==="coin"?$8/2:o9/2),"sliding");Z0.onShelf=!0}}}return{initObjects:_,dropObject:c,collectFallen:r,update:Q0,clearObjects:w,group:W}}var bK={en:{coins:"coins",dollars:"dollars",total:"total",prestige:"prestige",coinsBtn:"Coins",dollarsBtn:"Dollars",dropCoin:"DROP COIN",dropDollar:"DROP BILL",dropSub:"SPACE to drop",costCoin:"-1 coin",costDollar:"-1 $",shop:"Shop",prestigeTab:"Prestige",shopTitle:"Upgrades",prestigePoints:"Prestige Points",prestigeSacrifice:"SACRIFICE PROGRESS",prestigeDesc:"Lose everything but gain permanent prestige points",pushPower:"Demon Push",pushPowerDesc:"Coins push with the force of the underworld",multiDrop:"Multi-Drop",multiDropDesc:"Drop multiple coins at once",autoDrop:"Auto Dealer",autoDropDesc:"A phantom dealer drops for you!",multiplier:"Devil Multiplier",multiplierDesc:"Multiplies all rewards by sacred fire",maxCoins:"Infinite Wallet",maxCoinsDesc:"Max coin capacity increased by spirits",regenSpeed:"Occult Regen",regenDesc:"Free coins arrive from beyond the grave",dollarMagnet:"Dollar Magnet",dollarMagnetDesc:"Multiplies your dollar earnings",luck:"Fortune's Favor",luckDesc:"WIN zones have a chance to roll bonus coins (2×–4×)",comboShield:"Combo Shield",comboShieldDesc:"Combo decays more slowly between drops",prestigeBoost:"Prestige Boost",prestigeBoostDesc:"Gain more prestige points per reset",level:"Lv.",max:"MAX",soulBonus:"Soul Pact",soulBonusDesc:"Start each life with +50% max coins",darkMultiplier:"Dark Multiplier",darkMultiplierDesc:"Permanent +1 reward multiplier per level",voidDollars:"Void Blessing",voidDollarsDesc:"Start with starting-game dollars",occultAuto:"Occult Auto-Drop",occultAutoDesc:"Auto-drop 2x faster (permanent)",saintGold:"Saint Blessing",saintGoldDesc:"Coin gains +4 per level (compounds with Dark Multiplier)",upgraded:"Upgraded! Lv.",notEnoughCoins:"Not enough coins!",notEnoughDollars:"Not enough dollars!",maxLevel:"Already max level!",prestigeUp:"Prestige up! Lv.",notEnoughPrestige:"Not enough prestige points",coinsEarned:"coins earned!",coinsLost:"coins lost to the void...",cardsLost:"card(s) lost!",comboText:"COMBO x",freeCoins:"free coins claimed!",prestigeGain:"PRESTIGE! +",prestigeTotal:" (Total: ",prestigeWait:"Earn more before prestiging (",prestigeCurrent:" pts current)",resetConfirm:"Reset all progress (except prestige)?",categoryEconomy:"⚙ ECONOMY",categoryPush:"⚒ PUSH",categoryCapacity:"\uD83E\uDEA3 CAPACITY",categoryLuck:"\uD83C\uDF40 LUCK",categoryCurrency:"\uD83D\uDCB1 CURRENCY",categoryMeta:"✨ META",buy:"BUY",buyMax:"BUY MAX",noFunds:"Out of Funds!",freeCoinsDesc:"The spirits of the casino offer you a second chance...",claimBonus:"CLAIM BONUS",nextDonation:"Next donation in ",help:"Help",wastedCoins:"coins wasted (max reached)",cardCollected:"Bonus card collected! #",cardBonus:"bonus reward!",milestone:"MILESTONE",milestoneReached:"Milestone reached! +",milestoneBonusSuffix:" free coins",milestone100:"First hundred",milestone500:"Half a grand",milestone1k:"Four digits",milestone5k:"Heavy wallet",milestone10k:"Ten thousand!",milestone50k:"Halfway to a fortune",milestone100k:"Six figures",milestone500k:"Half a million",milestone1m:"MILLIONAIRE",jackpot:"JACKPOT!",jackpotBonus:"Jackpot bonus: +",winStreak:"WIN STREAK",streakBroken:"Streak broken",statsTitle:"\uD83D\uDCCA LIFETIME RECORDS",statsPeakCoins:"Peak coins",statsPeakDollars:"Peak dollars",statsPeakCombo:"Peak combo",statsTotalDrops:"Total drops",statsJackpots:"JACKPOTS hit",statsMilestones:"Milestones cleared",statsBestStreak:"Best win streak",jackpotChance:"Jackpot's Favor",jackpotChanceDesc:"Increases the chance of hitting the JACKPOT!",goldenTouch:"Golden Touch",goldenTouchDesc:"Chance to double earned coin batches",gambleTitle:"⚡ RISK IT",gambleDesc:"Double or Nothing! 50/50 chance",gambleWin:"YOU WON!",gambleLose:"YOU LOST!",gambleGain:"Profit: +",gambleLoss:"Loss: -",gambleWager:"Wager:",gambleMax:"MAX",gambleHalf:"HALF",comboBig:"COMBO"},fr:{coins:"pieces",dollars:"dollars",total:"total",prestige:"prestige",coinsBtn:"Pieces",dollarsBtn:"Dollars",dropCoin:"LACHER PIECE",dropDollar:"LACHER BILLET",dropSub:"ESPACE pour drop",costCoin:"-1 piece",costDollar:"-1 $",shop:"Boutique",prestigeTab:"Prestige",shopTitle:"Ameliorations",prestigePoints:"Points de Prestige",prestigeSacrifice:"SACRIFIER LA PROGRESSION",prestigeDesc:"Perds tout mais gagne des points de prestige permanents",pushPower:"Poussee Demoniaque",pushPowerDesc:"Les pieces poussent avec la force des enfers",multiDrop:"Multi-Drop",multiDropDesc:"Lache plusieurs pieces physiques d'un coup",autoDrop:"Croupier Automatique",autoDropDesc:"Un croupier fantome drop pour toi !",multiplier:"Multiplicateur du Diable",multiplierDesc:"Multiplie toutes les recompenses par le feu sacre",maxCoins:"Portefeuille de l'Infini",maxCoinsDesc:"Capacite max augmente par les esprits",regenSpeed:"Regeneration Occulte",regenDesc:"Les pieces gratuites arrivent d'outre-tombe",dollarMagnet:"Aimant a Dollars",dollarMagnetDesc:"Multiplie tes gains en dollars",luck:"Faveur de la Fortune",luckDesc:"Les zones WIN ont une chance de donner un bonus (x2-x4)",comboShield:"Bouclier de Combo",comboShieldDesc:"Le combo s'estompe plus lentement entre les drops",prestigeBoost:"Gain de Prestige Accru",prestigeBoostDesc:"Gagne plus de points de prestige a chaque reset",level:"Niv.",max:"MAX",soulBonus:"Pacte des Ames",soulBonusDesc:"Commence chaque vie avec +50% de pieces max",darkMultiplier:"Multiplicateur Obscur",darkMultiplierDesc:"+1 multiplicateur de recompense permanent par niveau",voidDollars:"Benediction du Vide",voidDollarsDesc:"Commence avec des dollars d'entree de jeu",occultAuto:"Auto-Drop Occulte",occultAutoDesc:"Auto-drop 2x plus rapide (permanent)",saintGold:"Benediction des Saints",saintGoldDesc:"Gains de pieces +4 par niveau (se combine avec Multiplicateur Obscur)",upgraded:"Ameliore ! Niv.",notEnoughCoins:"Pas assez de pieces !",notEnoughDollars:"Pas assez de dollars !",maxLevel:"Deja max level !",prestigeUp:"Prestige up ! Niv.",notEnoughPrestige:"Pas assez de points de prestige",coinsEarned:"pieces gagnees !",coinsLost:"pieces perdues dans le vide...",cardsLost:"carte(s) perdue(s) !",comboText:"Combo x",freeCoins:"pieces gratuites !",prestigeGain:"PRESTIGE ! +",prestigeTotal:" (Total: ",prestigeWait:"Gagne plus avant de prestiger (",prestigeCurrent:" pts actuels)",resetConfirm:"Reinitialiser toute la progression (hors prestige) ?",categoryEconomy:"⚙ ECONOMIE",categoryPush:"⚒ POUSSEE",categoryCapacity:"\uD83E\uDEA3 CAPACITE",categoryLuck:"\uD83C\uDF40 CHANCE",categoryCurrency:"\uD83D\uDCB1 MONNAIE",categoryMeta:"✨ META",buy:"ACHETER",buyMax:"ACHETER MAX",noFunds:"Plus de fonds !",freeCoinsDesc:"Les esprits du casino t'offrent une seconde chance...",claimBonus:"RECLAMER LE BUTIN",nextDonation:"Prochain don dans ",help:"Aide",wastedCoins:"pieces gaspilees (max atteint)",cardCollected:"Carte bonus collectionnee ! #",cardBonus:"recompense bonus !",milestone:"JALON",milestoneReached:"Jalon atteint ! +",milestoneBonusSuffix:" pieces gratuites",milestone100:"Premiere centaine",milestone500:"Un demi-millier",milestone1k:"Quatre chiffres",milestone5k:"Portefeuille lourd",milestone10k:"Dix mille !",milestone50k:"A mi-chemin de la fortune",milestone100k:"Six chiffres",milestone500k:"Un demi-million",milestone1m:"MILLIONNAIRE",jackpot:"JACKPOT !",jackpotBonus:"Bonus jackpot : +",winStreak:"SERIE DE VICTOIRES",streakBroken:"Serie cassee",statsTitle:"\uD83D\uDCCA RECORDS A VIE",statsPeakCoins:"Pieces max",statsPeakDollars:"Dollars max",statsPeakCombo:"Combo max",statsTotalDrops:"Total de drops",statsJackpots:"JACKPOTS reussis",statsMilestones:"Jalons franchis",statsBestStreak:"Meilleure serie",jackpotChance:"Faveur du Jackpot",jackpotChanceDesc:"Augmente les chances de gagner le JACKPOT !",goldenTouch:"Touche Doree",goldenTouchDesc:"Chance de doubler les gains de pieces",gambleTitle:"⚡ RISQUE TOUT",gambleDesc:"Double ou Rien ! 50/50 de chance",gambleWin:"GAGNE !",gambleLose:"PERDU !",gambleGain:"Gain: +",gambleLoss:"Perte: -",gambleWager:"Mise:",gambleMax:"MAX",gambleHalf:"MOITIE",comboBig:"COMBO"}},VQ=localStorage.getItem("coinpusher_lang")||"en";function z0(J){return bK[VQ]&&bK[VQ][J]||bK.en[J]||J}function xK(){return VQ}function DX(J){VQ=J,localStorage.setItem("coinpusher_lang",J)}var CJ=Object.freeze({ECONOMY:"economy",PUSH:"push",CAPACITY:"capacity",LUCK:"luck",CURRENCY:"currency",META:"meta"}),sN=[{id:"pushPower",nameKey:"pushPower",descKey:"pushPowerDesc",icon:"\uD83D\uDC80",baseCost:10,costMultiplier:1.45,maxLevel:20,effect:(J)=>1+J*0.3,category:CJ.PUSH},{id:"multiDrop",nameKey:"multiDrop",descKey:"multiDropDesc",icon:"\uD83C\uDFB0",baseCost:25,costMultiplier:1.55,maxLevel:10,effect:(J)=>1+J,category:CJ.ECONOMY},{id:"autoDrop",nameKey:"autoDrop",descKey:"autoDropDesc",icon:"\uD83C\uDCCF",baseCost:60,costMultiplier:1.7,maxLevel:12,effect:(J)=>J*0.5,category:CJ.ECONOMY},{id:"multiplier",nameKey:"multiplier",descKey:"multiplierDesc",icon:"♦️",baseCost:40,costMultiplier:1.85,maxLevel:25,effect:(J)=>1+J*0.4,category:CJ.ECONOMY},{id:"maxCoins",nameKey:"maxCoins",descKey:"maxCoinsDesc",icon:"\uD83E\uDE99",baseCost:15,costMultiplier:1.35,maxLevel:40,effect:(J)=>100+J*30,category:CJ.CAPACITY},{id:"regenSpeed",nameKey:"regenSpeed",descKey:"regenDesc",icon:"⏳",baseCost:20,costMultiplier:1.5,maxLevel:20,effect:(J)=>Math.max(1,30-J*1.4),category:CJ.CAPACITY},{id:"dollarMagnet",nameKey:"dollarMagnet",descKey:"dollarMagnetDesc",icon:"\uD83D\uDCB5",baseCost:80,costMultiplier:1.6,maxLevel:15,effect:(J)=>1+J*0.3,category:CJ.CURRENCY},{id:"luck",nameKey:"luck",descKey:"luckDesc",icon:"\uD83C\uDF40",baseCost:200,costMultiplier:1.9,maxLevel:10,effect:(J)=>J*0.05,category:CJ.LUCK},{id:"comboShield",nameKey:"comboShield",descKey:"comboShieldDesc",icon:"\uD83D\uDEE1️",baseCost:120,costMultiplier:1.7,maxLevel:8,effect:(J)=>Math.min(8,2.5+J*0.6),category:CJ.CAPACITY},{id:"prestigeBoost",nameKey:"prestigeBoost",descKey:"prestigeBoostDesc",icon:"\uD83C\uDF1F",baseCost:500,costMultiplier:2,maxLevel:10,effect:(J)=>1+J*0.3,category:CJ.META},{id:"jackpotChance",nameKey:"jackpotChance",descKey:"jackpotChanceDesc",icon:"\uD83C\uDFB0",baseCost:350,costMultiplier:2,maxLevel:10,effect:(J)=>0.02+J*0.005,category:CJ.LUCK},{id:"goldenTouch",nameKey:"goldenTouch",descKey:"goldenTouchDesc",icon:"\uD83E\uDD32",baseCost:500,costMultiplier:2.1,maxLevel:10,effect:(J)=>J*0.04,category:CJ.LUCK}],K9=sN.map((J)=>({...J,get name(){return z0(J.nameKey)},get desc(){return z0(J.descKey)}}));function Y6(J,Q){return Math.floor(J.baseCost*Math.pow(J.costMultiplier,Q))}function J8(J,Q){return J.effect(Q)}function EX(J,Q,$,K=99){let W=[];for(let Z=0;Z<K;Z++){let X=Q+Z;if(X>=J.maxLevel)break;let Y=Y6(J,X);if(Y>$)break;W.push(Y),$-=Y}return W}var RX=[{id:"soulBonus",nameKey:"soulBonus",descKey:"soulBonusDesc",icon:"\uD83D\uDC9C",baseCost:1,costMultiplier:2,maxLevel:10,effect:(J)=>1+J*0.5},{id:"darkMultiplier",nameKey:"darkMultiplier",descKey:"darkMultiplierDesc",icon:"\uD83C\uDF19",baseCost:3,costMultiplier:2.5,maxLevel:8,effect:(J)=>1+J},{id:"voidDollars",nameKey:"voidDollars",descKey:"voidDollarsDesc",icon:"\uD83D\uDCB5",baseCost:2,costMultiplier:2,maxLevel:10,effect:(J)=>J*50},{id:"occultAuto",nameKey:"occultAuto",descKey:"occultAutoDesc",icon:"\uD83D\uDD2E",baseCost:5,costMultiplier:3,maxLevel:5,effect:(J)=>1+J*0.4},{id:"saintGold",nameKey:"saintGold",descKey:"saintGoldDesc",icon:"⭐",baseCost:8,costMultiplier:3,maxLevel:5,effect:(J)=>1+J*4}],MQ=RX.map((J)=>({...J,get name(){return z0(J.nameKey)},get desc(){return z0(J.descKey)}}));function LQ(J,Q){return Math.floor(J.baseCost*Math.pow(J.costMultiplier,Q))}function kX(J,Q){return J.effect(Q)}function VX(J,Q){let $=J+Q*10;return Math.max(1,Math.floor(Math.sqrt($/50)))}function BQ(J){let Q={soulMultiplier:1,darkMultiplier:1,voidStartingDollars:0,occultSpeedBonus:1,saintMultiplier:1};if(!J.prestigeUpgrades)return Q;return RX.forEach(($)=>{let K=J.prestigeUpgrades[$.id]||0;if(K>0){let W=kX($,K);switch($.id){case"soulBonus":Q.soulMultiplier=W;break;case"darkMultiplier":Q.darkMultiplier=W;break;case"voidDollars":Q.voidStartingDollars=W;break;case"occultAuto":Q.occultSpeedBonus=W;break;case"saintGold":Q.saintMultiplier=W;break}}}),Q}function D8(J){try{let Q={schemaVersion:2,coins:J.coins,dollars:J.dollars,maxDollars:J.maxDollars,totalEarned:J.totalEarned,totalEarnedLifetime:J.totalEarnedLifetime||J.totalEarned,totalDropped:J.totalDropped,totalDollarsEarned:J.totalDollarsEarned||0,activeCurrency:J.activeCurrency||"coins",autoDropEnabled:J.autoDropEnabled??!1,upgrades:{...J.upgrades},prestigePoints:J.prestigePoints,prestigeUpgrades:{...J.prestigeUpgrades},collectedCards:J.collectedCards||[],dropCount:J.dropCount||0,lastDropTime:J.lastDropTime||0,regenCooldown:typeof J.regenCooldown==="number"?J.regenCooldown:30,isGameOver:!!J.isGameOver,peakCoins:J.peakCoins||0,peakDollars:J.peakDollars||0,peakCombo:J.peakCombo||0,bestWinStreak:J.bestWinStreak||0,winStreak:J.winStreak||0,milestonesHit:Array.isArray(J.milestonesHit)?J.milestonesHit:[],jackpotsHit:J.jackpotsHit||0,gameTime:J.gameTime||0,lastSave:Date.now()};localStorage.setItem("coinpusher3d_save",JSON.stringify(Q))}catch(Q){console.warn("Save failed:",Q)}}function MX(){try{let J=localStorage.getItem("coinpusher3d_save");if(!J)return null;let Q=JSON.parse(J);if(typeof Q.coins!=="number"||typeof Q.totalEarned!=="number")return null;return Q}catch(J){return console.warn("Load failed:",J),null}}function LX(J){setInterval(()=>{if(J)D8(J)},1e4)}function BX(){localStorage.removeItem("coinpusher3d_save")}function zX(){let J=MX(),Q=J?.prestigePoints||0,$=J?.prestigeUpgrades||{},K=BQ({prestigePoints:Q,prestigeUpgrades:$}),W=J?.upgrades||{},Z=W.maxCoins||0,X=J8(K9[4],Z),H={coins:0,maxCoins:Math.floor(X*K.soulMultiplier),dollars:0,maxDollars:Math.max(10,K.voidStartingDollars||0),totalEarned:0,totalEarnedLifetime:0,totalDropped:0,totalDollarsEarned:0,upgrades:{},dropCount:0,lastDropTime:0,autoDropAccumulator:0,regenCooldown:30,_regenInitialized:!1,isGameOver:!1,gameTime:0,activeCurrency:J?.activeCurrency||"coins",autoDropEnabled:J?.autoDropEnabled??!1,prestigePoints:Q,prestigeUpgrades:{...$},collectedCards:J?.collectedCards||[],peakCoins:0,peakDollars:0,peakCombo:0,bestWinStreak:0,winStreak:0,milestonesHit:[],jackpotsHit:0};if(J){H.totalEarned=typeof J.totalEarned==="number"?J.totalEarned:0,H.totalEarnedLifetime=typeof J.totalEarnedLifetime==="number"?J.totalEarnedLifetime:H.totalEarned,H.totalDropped=typeof J.totalDropped==="number"?J.totalDropped:0,H.totalDollarsEarned=typeof J.totalDollarsEarned==="number"?J.totalDollarsEarned:0,H.upgrades=W,H.maxDollars=Math.max(10,J.maxDollars||0);let U=typeof J.coins==="number"?J.coins:80;H.coins=Math.min(Math.max(U,80),H.maxCoins);let G=typeof J.dollars==="number"?J.dollars:0;if(H.dollars=Math.min(Math.max(G,10),H.maxDollars),typeof J.dropCount==="number")H.dropCount=J.dropCount;if(typeof J.lastDropTime==="number")H.lastDropTime=J.lastDropTime;if(typeof J.regenCooldown==="number")H.regenCooldown=J.regenCooldown;if(typeof J.isGameOver==="boolean")H.isGameOver=J.isGameOver;if(typeof J.peakCoins==="number")H.peakCoins=J.peakCoins;if(typeof J.peakDollars==="number")H.peakDollars=J.peakDollars;if(typeof J.peakCombo==="number")H.peakCombo=J.peakCombo;if(typeof J.bestWinStreak==="number")H.bestWinStreak=J.bestWinStreak;if(typeof J.winStreak==="number")H.winStreak=J.winStreak;if(Array.isArray(J.milestonesHit))H.milestonesHit=J.milestonesHit;if(typeof J.jackpotsHit==="number")H.jackpotsHit=J.jackpotsHit;if(typeof J.gameTime==="number")H.gameTime=J.gameTime}else H.coins=80,H.dollars=10,H.maxDollars=10;return H}function IX(J,Q){if(J.coins<Q||Q<=0)return{success:!1,reason:"not_enough_coins"};let $=Math.random()<0.5;if($)J.coins+=Q;else J.coins-=Q;return J.totalDropped+=Q,{success:!0,win:$,wager:Q,newBalance:Math.floor(J.coins)}}function W8(J,Q){return J.upgrades[Q]||0}function W9(J){if(J._cachedStats&&J._cachedStatsKey!==void 0){let l=J._cachedStatsKey;if(l.upgradesRef===J.upgrades&&l.prestigeUpgradesRef===J.prestigeUpgrades&&l.activeCurrency===J.activeCurrency&&l.autoDropEnabled===J.autoDropEnabled)return J._cachedStats}let Q=(l)=>K9.find((e)=>e.id===l),$=W8(J,"pushPower"),K=W8(J,"multiDrop"),W=W8(J,"autoDrop"),Z=W8(J,"multiplier"),X=W8(J,"maxCoins"),Y=W8(J,"regenSpeed"),H=W8(J,"dollarMagnet"),U=W8(J,"prestigeBoost"),G=W8(J,"luck"),O=W8(J,"comboShield"),q=W8(J,"jackpotChance"),R=W8(J,"goldenTouch"),V=BQ(J),I=J8(Q("pushPower"),$),E=J8(Q("multiDrop"),K),N=J8(Q("autoDrop"),W)*V.occultSpeedBonus,S=J8(Q("multiplier"),Z)*V.darkMultiplier*V.saintMultiplier,P=Math.floor(J8(Q("maxCoins"),X)*V.soulMultiplier),M=J8(Q("regenSpeed"),Y),_=J8(Q("dollarMagnet"),H),C=J8(Q("prestigeBoost"),U),w=J8(Q("luck"),G),k=J8(Q("comboShield"),O),z=J8(Q("jackpotChance"),q),o=J8(Q("goldenTouch"),R),j={pushPower:I,coinsPerDrop:E,autoDropRate:N,rewardMultiplier:S,maxCoins:P,regenCooldown:M,dollarMultiplier:_,prestigeBoost:C,luckChance:w,comboWindow:k,jackpotChance:z,goldenTouch:o};return J._cachedStats=j,J._cachedStatsKey={upgradesRef:J.upgrades,prestigeUpgradesRef:J.prestigeUpgrades,activeCurrency:J.activeCurrency,autoDropEnabled:J.autoDropEnabled},j}function iN(J){return W9(J).comboWindow||2.5}function PX(J,Q){let $=W9(J);if(J.activeCurrency==="dollars")return oN(J,$,Q);let K=1;if(J.coins<K)return{success:!1,reason:"no_coins"};J.coins-=K,J.totalDropped+=K,J.dropCount++,J.lastDropTime=Date.now();let W=0;if(J.dropCount%10===0)W=1,J.coins=Math.min(J.coins+W,J.maxCoins);if(Q)Q({spent:K,earned:0,total:J.coins,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:$.pushPower,currency:"coins",coinsPerDrop:$.coinsPerDrop,comboBonus:W});return{success:!0,spent:K,earned:0,total:J.coins,stats:$}}function oN(J,Q,$){if(J.dollars<1)return{success:!1,reason:"no_dollars"};if(J.dollars-=1,J.totalDropped+=1,J.dropCount++,J.lastDropTime=Date.now(),$)$({spent:1,earned:0,total:J.dollars,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:Q.pushPower*0.8,currency:"dollars",coinsPerDrop:1,comboBonus:0});return{success:!0,spent:1,earned:0,total:J.dollars,stats:Q}}function AX(J,Q,$=1){let K=K9.find((Y)=>Y.id===Q);if(!K)return{success:!1,reason:"not_found"};let W=0,Z=null;for(let Y=0;Y<$;Y++){let H=W8(J,Q);if(H>=K.maxLevel){Z="max_level";break}let U=Y6(K,H);if(J.coins<U){Z="not_enough_coins";break}J.coins-=U,J.upgrades[Q]=H+1,W++}if(W===0)return{success:!1,reason:Z||"not_enough_coins"};let X=W9(J);return J.maxCoins=X.maxCoins,D8(J),{success:!0,newLevel:J.upgrades[Q],levelsPurchased:W,stats:X}}function wX(J,Q){let $=MQ.find((Z)=>Z.id===Q);if(!$)return{success:!1,reason:"not_found"};let K=J.prestigeUpgrades[Q]||0;if(K>=$.maxLevel)return{success:!1,reason:"max_level"};let W=LQ($,K);if(J.prestigePoints<W)return{success:!1,reason:"not_enough_prestige"};return J.prestigePoints-=W,J.prestigeUpgrades[Q]=(J.prestigeUpgrades[Q]||0)+1,D8(J),{success:!0,newLevel:J.prestigeUpgrades[Q]}}function _X(J){let Q=W9(J),$=Math.max(5,Math.floor(J.totalEarnedLifetime/100));return J.coins=Math.min(J.coins+$,J.maxCoins),J.regenCooldown=Q.regenCooldown,J._regenInitialized=!1,$}function CX(J){let Q=J.totalEarnedLifetime||J.totalEarned,$=J.totalDollarsEarned||0,K=J.upgrades.prestigeBoost||0,W=K>0?J8(K9[7],K):1,Z=VX(Q,$),X=Math.floor(Z*W);if(X<=J.prestigePoints)return{success:!1,reason:"no_gain",current:J.prestigePoints};if(Q<100&&$<10)return{success:!1,reason:"no_gain",current:J.prestigePoints};let Y=[...J.collectedCards||[]],H={...J.prestigeUpgrades};J.upgrades={},J.dropCount=0,J.lastDropTime=0,J.autoDropAccumulator=0,J.regenCooldown=30,J._regenInitialized=!1,J.isGameOver=!1,J.gameTime=0,J.totalEarned=0,J.totalDropped=0,J.totalDollarsEarned=0,J.prestigePoints=X,J.prestigeUpgrades=H,J.collectedCards=Y;let U=J.prestigeUpgrades.soulBonus||0,G=J.prestigeUpgrades.voidDollars||0;return J.maxCoins=Math.floor(J8(K9[4],0)*BQ(J).soulMultiplier),J.coins=Math.min(Math.max(25,Math.floor(25*(1+U*0.5))),J.maxCoins),J.maxDollars=Math.max(10,G*50),J.dollars=J.maxDollars,D8(J),{success:!0,prestigePoints:X,gained:X}}function TX(J,Q,$){J.gameTime+=Q;let K=W9(J);if(J.autoDropEnabled&&K.autoDropRate>0){J.autoDropAccumulator+=K.autoDropRate*Q;while(J.autoDropAccumulator>=1&&J.coins>=1){J.autoDropAccumulator-=1;let Z=1;if(J.coins>=Z){if(J.coins-=Z,J.totalDropped+=Z,J.dropCount++,J.lastDropTime=Date.now(),$)$({spent:Z,earned:0,total:J.coins,isCombo:J.dropCount>5,comboCount:J.dropCount,pushForce:K.pushPower*0.7,isAuto:!0,currency:"coins",coinsPerDrop:K.coinsPerDrop,comboBonus:0})}}}if(J.coins<=0&&J.dollars<=0){if(!J._regenInitialized)J.regenCooldown=K.regenCooldown,J._regenInitialized=!0;if(J.regenCooldown-=Q,J.regenCooldown<=0)J.regenCooldown=0,J.isGameOver=!0}else J.isGameOver=!1,J._regenInitialized=!1,J.regenCooldown=K.regenCooldown;let W=iN(J)*1000;if(Date.now()-J.lastDropTime>W&&J.dropCount>0){if(J._comboDecayAccum=(J._comboDecayAccum||0)+Q,J._comboDecayAccum>=1)J.dropCount=Math.max(0,J.dropCount-Math.floor(J._comboDecayAccum)),J._comboDecayAccum=J._comboDecayAccum%1}else J._comboDecayAccum=0;return J}var aN={drop:{freq:800,type:"sine",duration:0.08,slide:-200},win:{freq:1200,type:"sine",duration:0.15,slide:400},lose:{freq:300,type:"sawtooth",duration:0.2,slide:-100},upgrade:{freq:600,type:"square",duration:0.12,slide:300},prestige:{freq:900,type:"sine",duration:0.4,slide:600},jackpot:{freq:1320,type:"sine",duration:0.6,slide:880,gain:0.22},bigwin:{freq:880,type:"triangle",duration:0.35,slide:660,gain:0.2}};var H6=null,gK=(()=>{try{let J=localStorage.getItem("coinpusher_sound");return J===null?!0:J==="1"}catch(J){return!0}})();function SX(J){gK=!!J;try{localStorage.setItem("coinpusher_sound",J?"1":"0")}catch(Q){}}function jX(){return gK}function rN(){if(!gK)return null;if(!H6){let J=window.AudioContext||window.webkitAudioContext;if(!J)return null;H6=new J}if(H6.state==="suspended")H6.resume();return H6}function Z9(J){let Q=aN[J];if(!Q)return;let $=rN();if(!$)return;let K=$.createOscillator(),W=$.createGain();K.type=Q.type,K.frequency.setValueAtTime(Q.freq,$.currentTime),K.frequency.exponentialRampToValueAtTime(Math.max(50,Q.freq+Q.slide),$.currentTime+Q.duration),W.gain.setValueAtTime(Q.gain||0.15,$.currentTime),W.gain.exponentialRampToValueAtTime(0.001,$.currentTime+Q.duration),K.connect(W),W.connect($.destination),K.start(),K.stop($.currentTime+Q.duration)}function yX(J,Q){let $={coinsDisplay:document.getElementById("coins-display"),dollarsDisplay:document.getElementById("dollars-display"),totalEarned:document.getElementById("total-earned"),dropBtn:document.getElementById("drop-btn"),dropIcon:document.querySelector("#drop-btn .btn-icon"),dropText:document.querySelector("#drop-btn .btn-text"),dropSub:document.querySelector("#drop-btn .btn-sub"),upgradesList:document.getElementById("upgrades-list"),prestigeList:document.getElementById("prestige-upgrades-list"),shopView:document.getElementById("shop-view"),prestigeView:document.getElementById("prestige-view"),panelContent:document.getElementById("panel-content"),panelToggle:document.getElementById("panel-toggle"),panelTitle:document.getElementById("panel-title"),tabs:document.querySelectorAll(".tab-btn"),currencyBtns:document.querySelectorAll(".currency-btn"),freeModal:document.getElementById("free-coins-modal"),freeCoinsBtn:document.getElementById("free-coins-btn"),freeCooldown:document.getElementById("free-cooldown"),regenTimer:document.getElementById("regen-timer"),regenCountdown:document.getElementById("regen-countdown"),notifications:document.getElementById("notifications"),dropEffectLabel:document.getElementById("drop-effect-label"),resetBtn:document.getElementById("reset-btn"),prestigeBtn:document.getElementById("prestige-btn"),prestigeBadge:document.getElementById("prestige-badge"),prestigePointsDisplay:document.getElementById("prestige-points-display"),prestigePointsBig:document.getElementById("prestige-points-big"),prestigeProgressBar:document.getElementById("prestige-progress-bar"),prestigeProgressText:document.getElementById("prestige-progress-text"),prestigeProgressWrap:document.getElementById("prestige-progress-wrap"),collectedCards:document.getElementById("collected-cards"),cardsGrid:document.getElementById("cards-grid"),autoDropToggle:document.getElementById("auto-drop-toggle"),soundToggle:document.getElementById("sound-toggle"),langBtn:document.getElementById("lang-btn")},K=J.coins,W=J.dollars,Z=null,X="shop",Y=!1,H=jX();function U(h){if(h==="shop")return"\uD83D\uDED2 "+z0("shop");if(h==="prestige")return"\uD83D\uDC51 "+z0("prestigeTab");if(h==="settings")return"⚙ "+z0("help");return""}function G(h){if(h==="shop")return"\uD83D\uDED2 "+z0("shopTitle");if(h==="prestige")return"\uD83D\uDC51 "+z0("prestigeTab");return"⚙ "+z0("help")}function O(){if(!$.langBtn)return;$.langBtn.textContent=xK()==="en"?"FR":"EN"}function q(){DX(xK()==="en"?"fr":"en"),O(),R(),e0.refresh(J)}function R(){document.querySelectorAll(".label").forEach((D)=>{if(D.dataset.key)D.textContent=z0(D.dataset.key)}),document.querySelectorAll(".currency-btn").forEach((D)=>{D.textContent=D.dataset.currency==="coins"?"\uD83E\uDE99 "+z0("coinsBtn"):"\uD83D\uDCB5 "+z0("dollarsBtn")}),E(),V(),_(),w()}function V(){if($.tabs.forEach((F)=>{F.textContent=U(F.dataset.tab)}),$.panelTitle)$.panelTitle.textContent=G(X);let h=document.querySelector(".prestige-sub");if(h)h.textContent="⭐ "+z0("prestigePoints");if($.prestigeBtn)$.prestigeBtn.textContent="\uD83D\uDD25 "+z0("prestigeSacrifice");let D=document.querySelector(".prestige-sub-desc");if(D)D.textContent=z0("prestigeDesc");if($.freeModal){let F=$.freeModal.querySelector("h2"),A=$.freeModal.querySelector("p");if(F)F.textContent="\uD83D\uDC80 "+z0("noFunds");if(A)A.textContent=z0("freeCoinsDesc");let x=$.freeCoinsBtn?.querySelector("span");if(x)x.textContent="\uD83C\uDF81 "+z0("claimBonus")}}function I(){let h=Math.floor(J.coins),D=Math.floor(J.dollars);if(h!==K){if($.coinsDisplay.textContent=h,h>K)$.coinsDisplay.classList.remove("pop"),$.coinsDisplay.offsetWidth,$.coinsDisplay.classList.add("pop");K=h}if(D!==W){if($.dollarsDisplay.textContent=D,D>W)$.dollarsDisplay.classList.remove("pop"),$.dollarsDisplay.offsetWidth,$.dollarsDisplay.classList.add("pop");W=D}if($.totalEarned.textContent=Math.floor(J.totalEarnedLifetime||J.totalEarned),J.prestigePoints>0){if($.prestigeBadge.classList.remove("hidden"),$.prestigePointsDisplay.textContent=J.prestigePoints,$.prestigePointsBig.textContent=J.prestigePoints,J.prestigePoints>=10)$.prestigeBadge.classList.add("prestige-high")}else $.prestigeBadge.classList.add("hidden")}function E(){let h=J.activeCurrency==="coins";$.currencyBtns.forEach((D)=>{D.classList.toggle("active",D.dataset.currency===J.activeCurrency),D.classList.toggle("dollar-mode",D.dataset.currency==="dollars")}),$.dropIcon.textContent=h?"\uD83E\uDE99":"\uD83D\uDCB5",$.dropText.textContent=h?z0("dropCoin"):z0("dropDollar"),$.dropSub.textContent=h?z0("costCoin"):z0("costDollar"),$.dropBtn.style.borderColor=h?"#ffd700":"#00ff88",$.dropBtn.style.color=h?"#fff4a3":"#00ff88"}function N(h){$.dropBtn.disabled=!h}function S(h){if(X=h,$.tabs.forEach((D)=>D.classList.toggle("active",D.dataset.tab===h)),$.shopView.classList.toggle("hidden",h!=="shop"),$.prestigeView.classList.toggle("hidden",h!=="prestige"),$.settingsView=$.settingsView||document.getElementById("settings-view"),$.settingsView)$.settingsView.classList.toggle("hidden",h!=="settings");if($.panelTitle.textContent=G(h),h==="prestige")$.prestigePointsBig.textContent=J.prestigePoints||0,w(),v(),l()}function P(h,D){let F=h.effect(D);switch(h.id){case"pushPower":return"Push "+F.toFixed(2)+"x";case"multiDrop":return Math.floor(Math.max(1,F))+" coins/drop";case"autoDrop":return F.toFixed(2)+"/s";case"multiplier":return"x"+F.toFixed(2);case"maxCoins":return F+" max";case"regenSpeed":return F.toFixed(1)+"s";case"dollarMagnet":return"x"+F.toFixed(2);case"luck":return"+"+(F*100).toFixed(0)+"% chance";case"comboShield":return F.toFixed(1)+"s window";case"prestigeBoost":return"x"+F.toFixed(2);case"jackpotChance":return"+"+((F-0.02)*100).toFixed(1)+"% extra";case"goldenTouch":return(F*100).toFixed(0)+"% double";default:return""}}function M(){let h=[CJ.ECONOMY,CJ.PUSH,CJ.CAPACITY,CJ.LUCK,CJ.CURRENCY,CJ.META],D=[];return h.forEach((F)=>{K9.forEach((A)=>{if(A.category===F)D.push(A)})}),D}function _(){$.upgradesList.innerHTML="",[CJ.ECONOMY,CJ.PUSH,CJ.CAPACITY,CJ.LUCK,CJ.CURRENCY,CJ.META].forEach((D)=>{let F=K9.filter((X0)=>X0.category===D);if(F.length===0)return;let A=document.createElement("div");A.className="upgrade-category-header cat-"+D;let x="category"+D.charAt(0).toUpperCase()+D.slice(1);A.textContent=z0(x),$.upgradesList.appendChild(A),F.forEach(C)})}function C(h){let D=W8(J,h.id),F=D>=h.maxLevel,A=Y6(h,D),x=J.coins>=A,X0=F?[]:EX(h,D,J.coins),U0=X0.length,R0=X0.reduce((G0,h0)=>G0+h0,0),t=U0>1,$0=t?"⇧ "+U0+" for \uD83E\uDE99"+R0.toLocaleString():null,O0=document.createElement("div"),S0="upgrade-item cat-"+h.category+(F?" bought":"");O0.className=S0;let L0=F?z0("max"):t?'<span class="upgrade-cost-bulk">'+$0+'</span><span class="upgrade-cost-single">\uD83E\uDE99'+A.toLocaleString()+"</span>":"\uD83E\uDE99"+A.toLocaleString();if(O0.innerHTML='<div class="upgrade-icon">'+h.icon+'</div><div class="upgrade-info"><div class="upgrade-name">'+h.name+'</div><div class="upgrade-desc">'+h.desc+'</div><div class="upgrade-level">'+z0("level")+" "+D+"/"+h.maxLevel+'</div></div><div class="upgrade-cost '+(x||F?"":"locked")+'">'+L0+"</div>",!F)O0.style.cursor=x?"pointer":"not-allowed",O0.addEventListener("click",(G0)=>{let h0=G0.shiftKey?U0:1;if(Q.onBuyUpgrade)Q.onBuyUpgrade(h.id,h0)});$.upgradesList.appendChild(O0)}function w(){$.prestigeList.innerHTML="";let h=J.prestigePoints||0;MQ.forEach((D)=>{let F=J.prestigeUpgrades[D.id]||0,A=F>=D.maxLevel,x=LQ(D,F),X0=h>=x,U0=document.createElement("div");if(U0.className="upgrade-item"+(A?" bought":""),U0.innerHTML='<div class="upgrade-icon">'+D.icon+'</div><div class="upgrade-info"><div class="upgrade-name">'+D.name+'</div><div class="upgrade-desc">'+D.desc+'</div><div class="upgrade-level">'+z0("level")+" "+F+"/"+D.maxLevel+'</div></div><div class="upgrade-cost prestige-cost '+(X0||A?"":"locked")+'">'+(A?z0("max"):"\uD83D\uDC51"+x)+"</div>",!A)U0.style.cursor=X0?"pointer":"not-allowed",U0.addEventListener("click",()=>{if(Q.onBuyPrestigeUpgrade)Q.onBuyPrestigeUpgrade(D.id)});$.prestigeList.appendChild(U0)})}function k(h,D="info"){let F=document.createElement("div");F.className="notification "+D,F.textContent=h,$.notifications.appendChild(F),setTimeout(()=>{if(F.parentNode)F.remove()},2500)}function z(h){let D=document.createElement("div");D.className="jackpot-banner",D.innerHTML='\uD83C\uDFB0 <span class="jackpot-text">'+z0("jackpot")+'</span> <span class="jackpot-bonus">+'+h+" \uD83E\uDE99</span>",document.body.appendChild(D),requestAnimationFrame(()=>D.classList.add("show"));let F=document.createElement("div");F.className="jackpot-burst";for(let A=0;A<10;A++){let x=document.createElement("div");x.className="jackpot-particle",x.textContent="\uD83E\uDE99",x.style.setProperty("--dx",(Math.random()-0.5)*400+"px"),x.style.setProperty("--dy",Math.random()*-200-60+"px"),x.style.animationDelay=Math.random()*0.2+"s",F.appendChild(x)}D.appendChild(F),setTimeout(()=>{D.classList.remove("show"),D.classList.add("hide"),setTimeout(()=>{if(D.parentNode)D.remove()},500)},2200)}function o(h,D){let F=document.createElement("div");F.className="milestone-banner",F.innerHTML='<div class="milestone-eyebrow">'+z0("milestone")+'</div><div class="milestone-title">'+z0(h.key)+'</div><div class="milestone-subtitle">'+h.value.toLocaleString()+" lifetime coins</div>"+(D>0?'<div class="milestone-bonus">+'+D+" \uD83E\uDE99 "+z0("milestoneBonusSuffix")+"</div>":""),document.body.appendChild(F),requestAnimationFrame(()=>F.classList.add("show")),setTimeout(()=>{F.classList.remove("show"),F.classList.add("hide"),setTimeout(()=>{if(F.parentNode)F.remove()},600)},3500)}function j(h,D,F){let A=document.getElementById("streak-chip");if(h<=2&&!F){if(A)A.classList.add("hidden");return}if(!A){A=document.createElement("div"),A.id="streak-chip",A.className="streak-chip hidden";let x=document.getElementById("drop-area");if(x)x.appendChild(A)}if(A.classList.remove("hidden"),F)A.classList.remove("streak-hot"),A.classList.add("streak-broken"),A.innerHTML="\uD83D\uDC94 "+z0("streakBroken")+" · best "+D,setTimeout(()=>{if(A)A.classList.remove("streak-broken"),A.classList.add("hidden")},1800);else A.classList.add("streak-hot"),A.classList.remove("streak-broken"),A.innerHTML="\uD83D\uDD25 "+z0("winStreak")+" <b>x"+h+"</b>"+(D>h?" · best "+D:"")}function l(){let h=document.getElementById("stats-panel"),D=$.prestigeView;if(!D)return;if(!h){h=document.createElement("div"),h.id="stats-panel",h.className="stats-panel";let x=$.prestigeList;if(x&&x.parentNode===D)D.insertBefore(h,x);else D.appendChild(h)}let F=Math.floor(J.totalEarnedLifetime||J.totalEarned||0),A=[[z0("statsTotalDrops"),Math.floor(J.totalDropped||0).toLocaleString()],[z0("statsPeakCoins"),Math.floor(J.peakCoins||0).toLocaleString()],[z0("statsPeakDollars"),Math.floor(J.peakDollars||0).toLocaleString()],[z0("statsPeakCombo"),"x"+(J.peakCombo||0)],[z0("statsBestStreak"),"x"+(J.bestWinStreak||0)],[z0("statsJackpots"),"\uD83C\uDFB0 "+(J.jackpotsHit||0)],[z0("statsMilestones"),"\uD83C\uDFC5 "+(J.milestonesHit||[]).length+"/9"],[z0("total"),F.toLocaleString()]];h.innerHTML='<div class="stats-title">'+z0("statsTitle")+"</div>"+A.map(([x,X0])=>'<div class="stats-row"><span class="stats-key">'+x+'</span><span class="stats-val">'+X0+"</span></div>").join("")}function e(h,D,F){let A=document.createElement("div");A.className="floating-reward",A.textContent=h,A.style.left=D+"px",A.style.top=F+"px",document.body.appendChild(A),setTimeout(()=>{if(A.parentNode)A.remove()},1200)}function c(h){let D=$.dropBtn;if(h>5){if($.dropEffectLabel.textContent="\uD83D\uDD25 "+z0("comboText")+h+"!",$.dropEffectLabel.style.color="#ff2d95",$.dropEffectLabel.classList.remove("mega"),$.dropEffectLabel.classList.add("mega"),D)D.classList.add("combo-hot"),D.classList.remove("combo-warm")}else if(h>3){if($.dropEffectLabel.textContent="✨ x"+h,$.dropEffectLabel.style.color="#ffd700",$.dropEffectLabel.classList.remove("mega"),D)D.classList.add("combo-warm"),D.classList.remove("combo-hot")}else if(h>1){if($.dropEffectLabel.textContent="✨ x"+h,$.dropEffectLabel.style.color="#fff4a3",$.dropEffectLabel.classList.remove("mega"),D)D.classList.remove("combo-warm","combo-hot")}else if($.dropEffectLabel.textContent="",$.dropEffectLabel.classList.remove("mega"),D)D.classList.remove("combo-warm","combo-hot")}function r(h=30){if(!$.freeModal.classList.contains("hidden"))return;$.freeModal.classList.remove("hidden");let D=Math.max(1,Math.ceil(h));if($.freeCooldown.textContent=D,$.freeCoinsBtn.disabled=!0,Z)clearInterval(Z);Z=setInterval(()=>{if(D--,$.freeCooldown.textContent=D,D<=0)clearInterval(Z),Z=null,$.freeCoinsBtn.disabled=!1},1000),$.freeCoinsBtn.onclick=()=>{if($.freeCoinsBtn.disabled)return;if(Q.onClaimFree)Q.onClaimFree();Q0()}}function Q0(){if($.freeModal.classList.add("hidden"),Z)clearInterval(Z),Z=null}function u(h){if(h>0)$.regenTimer.classList.remove("hidden"),$.regenCountdown.textContent=Math.ceil(h);else $.regenTimer.classList.add("hidden")}function y(h){let D=h.currency==="dollars"?"\uD83D\uDCB5":"\uD83E\uDE99";if(h.isAuto){if(h.earned>0)e("\uD83E\uDD16 +"+h.earned+" "+D,window.innerWidth/2-40,window.innerHeight/2-50);return}if(h.earned>0){let F=$.dropBtn.getBoundingClientRect(),A="+"+h.earned+" "+D;if(h.earned>=5)A="\uD83C\uDF89 +"+h.earned+" "+D;if(h.isCombo)A="\uD83D\uDD25 "+z0("comboText")+h.comboCount+"! +"+h.earned+" "+D;e(A,F.left+F.width/2-40,F.top-30)}if(h.isCombo&&h.comboCount>3)k("\uD83D\uDD25 "+z0("comboText")+h.comboCount+"!","success")}function T(h){let D=document.querySelector(".coins-wasted");if(D)D.remove();let F=document.createElement("div");F.className="coins-wasted",F.textContent="⚠️ +"+h+" "+z0("wastedCoins"),F.style.left=window.innerWidth/2-100+"px",F.style.top="120px",document.body.appendChild(F),setTimeout(()=>{if(F.parentNode)F.remove()},2200)}function f(){if(!$.prestigeProgressBar||!$.prestigeProgressText)return;let h=100,D=Math.min(1,(J.totalEarnedLifetime||J.totalEarned||0)/h);$.prestigeProgressBar.style.width=D*100+"%",$.prestigeProgressText.textContent=Math.floor(J.totalEarnedLifetime||J.totalEarned||0)+" / "+h}function v(){if(!$.cardsGrid)return;let h=J.collectedCards||[];if(h.length>0)$.collectedCards.classList.remove("hidden"),$.cardsGrid.innerHTML="",h.forEach((D,F)=>{let A=document.createElement("div");A.className="card-item",A.textContent="\uD83C\uDCCF "+(F+1),A.title=D,$.cardsGrid.appendChild(A)});else $.collectedCards.classList.add("hidden")}function d(h,D,F,A){let x=document.createElement("div");x.className="zone-feedback "+D,x.textContent=h,x.style.left=F+"px",x.style.top=A+"px",document.body.appendChild(x),setTimeout(()=>{if(x.parentNode)x.remove()},1500)}function J0(h){let D=h>=2?"shake-hard":"shake-soft";document.body.classList.remove("shake-soft","shake-hard"),document.body.offsetWidth,document.body.classList.add(D)}function i(h){I(),E(),_();let D=h.activeCurrency==="dollars"?h.dollars>=1:h.coins>=1;if(N(D),h.isGameOver)r(h.regenCooldown);if($.autoDropToggle)$.autoDropToggle.checked=!!h.autoDropEnabled;if(c(h.dropCount),f(),X==="prestige")$.prestigePointsBig.textContent=h.prestigePoints||0,w(),v();let F=h.totalEarned>=100||h.totalDollarsEarned>=10;if($.prestigeBtn.disabled=!F,h.prestigePoints>0)$.prestigeBadge.classList.remove("hidden"),$.prestigePointsDisplay.textContent=h.prestigePoints}function B(){return Y}function Z0(){return H}function N0(h){if(Y=!!h,J.autoDropEnabled=Y,$.autoDropToggle)$.autoDropToggle.checked=Y}function F0(h){if(H=!!h,SX(H),$.soundToggle)$.soundToggle.checked=H}let k0="coinpusher_tutorial_dismissed";function l0(){try{return localStorage.getItem(k0)==="1"}catch(h){return!1}}function C0(){let h=document.getElementById("tutorial-overlay");if(!h||h.classList.contains("hidden"))return;h.classList.add("hiding");try{localStorage.setItem(k0,"1")}catch(D){}setTimeout(()=>{h.classList.add("hidden"),h.classList.remove("hiding")},350)}function b0(){if(l0())return;setTimeout(()=>{let h=document.getElementById("tutorial-overlay");if(!h)return;h.classList.remove("hidden"),h.addEventListener("click",C0,{once:!0})},700)}if($.dropBtn.addEventListener("click",()=>{if(Q.onDrop)Q.onDrop();C0()}),document.addEventListener("keydown",(h)=>{let D=h.target;if(D&&(D.tagName==="INPUT"||D.tagName==="TEXTAREA"))return;if(h.code==="Space"&&!h.repeat){if(h.preventDefault(),C0(),Q.onDrop)Q.onDrop()}}),$.currencyBtns.forEach((h)=>{h.addEventListener("click",()=>{if(Q.onCurrencySwitch)Q.onCurrencySwitch(h.dataset.currency)})}),$.tabs.forEach((h)=>{h.addEventListener("click",()=>S(h.dataset.tab))}),$.panelToggle.addEventListener("click",()=>{$.panelContent.classList.toggle("collapsed"),$.panelToggle.classList.toggle("collapsed")}),$.resetBtn)$.resetBtn.addEventListener("click",()=>{if(Q.onReset)Q.onReset()});if($.prestigeBtn)$.prestigeBtn.addEventListener("click",()=>{if(Q.onPrestige)Q.onPrestige()});if($.langBtn)$.langBtn.addEventListener("click",q);if($.autoDropToggle)$.autoDropToggle.addEventListener("change",(h)=>{Y=h.target.checked,J.autoDropEnabled=Y});if($.soundToggle)$.soundToggle.addEventListener("change",(h)=>{H=h.target.checked,F0(H)});if(document.addEventListener("keydown",(h)=>{let D=h.target;if(D&&(D.tagName==="INPUT"||D.tagName==="TEXTAREA"))return;if(C0(),h.code==="Tab"&&!h.repeat&&e0.isPrestigeReady&&e0.isPrestigeReady()){if(h.preventDefault(),Q.onPrestige)Q.onPrestige();return}let F=M();if(h.key>="1"&&h.key<="9"){let A=parseInt(h.key)-1;if(A<F.length&&Q.onBuyUpgrade)Q.onBuyUpgrade(F[A].id)}else if(h.key==="0"){if(9<F.length&&Q.onBuyUpgrade)Q.onBuyUpgrade(F[9].id)}}),$.soundToggle)$.soundToggle.checked=H;O(),R(),b0();let c0=i;function s0(h){c0(h),e0.isPrestigeReady=()=>!!(h&&(h.totalEarned>=100||h.totalDollarsEarned>=10))}function x0(h=20){let D=document.getElementById("coin-rain-container");if(!D)D=document.createElement("div"),D.id="coin-rain-container",document.body.appendChild(D);let F=["\uD83E\uDE99","\uD83D\uDCB0","⭐","✨","\uD83E\uDE99"];for(let A=0;A<h;A++){let x=document.createElement("div");x.className="coin-rain-particle",x.textContent=F[Math.floor(Math.random()*F.length)],x.style.left=Math.random()*100+"%",x.style.fontSize=16+Math.random()*18+"px",x.style.animationDuration=1.5+Math.random()*2+"s",x.style.animationDelay=Math.random()*0.8+"s",D.appendChild(x),setTimeout(()=>{if(x.parentNode)x.remove()},4000)}}function UJ(){let h=document.createElement("div");h.className="upgrade-flash",document.body.appendChild(h),setTimeout(()=>{if(h.parentNode)h.remove()},700)}let i0=null;function qJ(){if(!i0)i0=document.createElement("div"),i0.className="gamble-btn-container",i0.id="gamble-section";let h=$.shopView;if(h&&!i0.parentNode){let O0=$.upgradesList;if(O0&&O0.parentNode===h)O0.after(i0);else h.appendChild(i0)}let D=Math.floor(J.coins),F=D>=1,A=Math.max(1,Math.min(D,YJ||D)),x=z0("gambleMax"),X0=z0("gambleHalf");i0.innerHTML=`
      <button class="gamble-btn" id="gamble-btn" ${F?"":"disabled"}>
        \uD83C\uDFB2 ${z0("gambleTitle")}
      </button>
      <div style="font-size:11px;color:var(--text-dim);margin-top:2px;">${z0("gambleDesc")}</div>
      <div class="gamble-controls">
        <button class="gamble-wager-btn" id="gamble-half-btn" ${F?"":"disabled"}>½ ${X0}</button>
        <input type="number" class="gamble-wager-input" id="gamble-wager"
          value="${Math.min(A,D)}" min="1" max="${Math.max(1,D)}" ${F?"":"disabled"}>
        <button class="gamble-wager-btn" id="gamble-max-btn" ${F?"":"disabled"}>${x}</button>
      </div>
    `;let U0=i0.querySelector("#gamble-btn"),R0=i0.querySelector("#gamble-wager"),t=i0.querySelector("#gamble-half-btn"),$0=i0.querySelector("#gamble-max-btn");if(U0)U0.addEventListener("click",()=>{let O0=parseInt(R0?.value||1);if(O0>0&&Q.onGamble)Q.onGamble(O0)});if(t)t.addEventListener("click",()=>{let O0=Math.max(1,Math.floor(D/2));if(R0)R0.value=O0;YJ=O0});if($0)$0.addEventListener("click",()=>{if(R0)R0.value=D;YJ=D});if(R0)R0.addEventListener("change",()=>{let O0=parseInt(R0.value)||1;YJ=Math.max(1,Math.min(O0,D)),R0.value=YJ})}let YJ=10;function GJ(){if(i0&&i0.parentNode)qJ()}function HJ(h){let D=document.createElement("div");D.className="gamble-result-overlay";let F=document.createElement("div");F.className="gamble-result-card "+(h.win?"win":"lose");let A=h.win?"\uD83C\uDF89":"\uD83D\uDC80",x=h.win?z0("gambleWin"):z0("gambleLose"),X0=h.win?"+"+h.wager:"-"+h.wager;if(F.innerHTML=`
      <div class="gamble-result-title">${A} ${x}</div>
      <div class="gamble-result-amount">${X0} \uD83E\uDE99</div>
    `,D.appendChild(F),document.body.appendChild(D),h.win)x0(30);setTimeout(()=>{D.style.transition="opacity 0.3s",D.style.opacity="0",setTimeout(()=>{if(D.parentNode)D.remove()},350)},1400)}let b=s0;function gJ(h){b(h),GJ()}let e0={updateHUD:I,updateDropButton:N,renderUpgrades:_,renderPrestigeUpgrades:w,showNotification:k,showFloatingReward:e,showJackpot:z,showMilestone:o,updateStreak:j,renderStatsPanel:l,showDropResult:y,showFreeModal:r,hideFreeModal:Q0,updateRegenTimer:u,updateCombo:c,refresh:gJ,switchTab:S,updateCurrencyUI:E,showCoinsWasted:T,showZoneFeedback:d,renderPrestigeProgress:f,renderCollectedCards:v,isAutoDropEnabled:B,isSoundEnabled:Z0,setAutoDropEnabled:N0,setSoundEnabled:F0,isPrestigeReady:()=>!1,dismissTutorial:C0,screenShake:J0,showCoinRain:x0,showUpgradeFlash:UJ,renderGambleUI:qJ,showGambleResult:HJ};return e0}var tN=document.getElementById("canvas-container"),hX=YX(tN);if(!hX)throw console.warn("Aborting game init: WebGL unavailable."),Error("WebGL unavailable");var{scene:q6,camera:eN,renderer:JG,controls:QG,updateFlames:$G,updateAmbient:KG}=hX,P8=HX(q6),H0=zX(),WG=(H0.collectedCards||[]).length,w7=OX(q6,P8,WG);function ZG(){if(!PX(H0,(Q)=>{let $=Q.currency==="dollars"?"dollar":"coin",K=Math.max(1,Math.floor(Q.coinsPerDrop||1));for(let W=0;W<K;W++)setTimeout(()=>w7.dropObject(Q.pushForce,$),W*50);if(Q.comboBonus>0)g0.showNotification("\uD83D\uDD25 Combo bonus +"+Q.comboBonus+" coin!","success");g0.showDropResult(Q),g0.updateCombo(Q.comboCount),Z9("drop")}).success){let $=(H0.activeCurrency==="dollars"?"\uD83D\uDCB5":"\uD83E\uDE99")+" "+z0(H0.activeCurrency==="dollars"?"notEnoughDollars":"notEnoughCoins");if(g0.showNotification($,"danger"),H0.activeCurrency==="coins"&&H0.coins<=0&&H0.dollars<=0){if(!H0._regenInitialized)H0.regenCooldown=W9(H0).regenCooldown,H0._regenInitialized=!0;H0.isGameOver=!0}}g0.refresh(H0),D8(H0)}function XG(J,Q=1){let $=AX(H0,J,Q);if($.success){let K=$.levelsPurchased>1?"⬆️ "+z0("upgraded")+$.newLevel+" (+"+$.levelsPurchased+")":"⬆️ "+z0("upgraded")+$.newLevel;g0.showNotification(K,"success"),g0.showUpgradeFlash(),g0.refresh(H0),D8(H0),Z9("upgrade")}else if($.reason==="not_enough_coins")g0.showNotification("\uD83E\uDE99 "+z0("notEnoughCoins"),"danger");else if($.reason==="max_level")g0.showNotification("⭐ "+z0("maxLevel"),"info")}function YG(J){let Q=wX(H0,J);if(Q.success)g0.showNotification("\uD83D\uDC51 "+z0("prestigeUp")+Q.newLevel,"prestige"),g0.refresh(H0),D8(H0),Z9("upgrade");else if(Q.reason==="not_enough_prestige")g0.showNotification(z0("notEnoughPrestige"),"danger");else if(Q.reason==="max_level")g0.showNotification("⭐ "+z0("maxLevel"),"info")}function HG(){let J=_X(H0);g0.showNotification("\uD83C\uDF81 +"+J+" "+z0("freeCoins"),"success"),H0.isGameOver=!1,g0.hideFreeModal(),g0.refresh(H0),D8(H0)}function UG(J){H0.activeCurrency=J,g0.updateCurrencyUI(),g0.updateDropButton(J==="coins"?H0.coins>=1:H0.dollars>=1)}function qG(){let J=CX(H0);if(J.success)g0.showNotification("\uD83C\uDF1F "+z0("prestigeGain")+J.gained+z0("prestigeTotal")+J.prestigePoints+")","prestige"),w7.initObjects(20,3),g0.refresh(H0),g0.switchTab("prestige"),D8(H0),Z9("prestige");else if(J.reason==="no_gain")g0.showNotification(z0("prestigeWait")+J.current+z0("prestigeCurrent"),"info")}function NG(){if(confirm(z0("resetConfirm")))BX(),location.reload()}function GG(J){let Q=IX(H0,J);if(Q.success)g0.showGambleResult(Q),g0.refresh(H0),D8(H0),Z9(Q.win?"win":"lose");else g0.showNotification("\uD83E\uDE99 "+z0("notEnoughCoins"),"danger")}var g0=yX(H0,{onDrop:ZG,onBuyUpgrade:XG,onBuyPrestigeUpgrade:YG,onClaimFree:HG,onReset:NG,onPrestige:qG,onCurrencySwitch:UG,onGamble:GG});g0.renderGambleUI();function FG(){let J=new bJ,Q=new A0({color:16768324,emissive:16746496,emissiveIntensity:0.4});[-2.4,-1.6,-0.8,0,0.8,1.6,2.4].forEach((K)=>{let W=new K0(new D0(0.35,0.22,0.03),Q);W.position.set(K,P8.height+2.3,-P8.depth/2-0.11),J.add(W)}),q6.add(J)}FG();var U6=(()=>{let Q=new hJ,$=new Float32Array(600),K=new Float32Array(600),W=new Float32Array(600),Z=new Float32Array(200);for(let O=0;O<200;O++)$[O*3]=0,$[O*3+1]=-10,$[O*3+2]=0,K[O*3]=0.6+Math.random()*0.4,K[O*3+1]=0.2+Math.random()*0.3,K[O*3+2]=0.6+Math.random()*0.4,Z[O]=0;Q.setAttribute("position",new oJ($,3)),Q.setAttribute("color",new oJ(K,3));let X=new d9({size:0.04,vertexColors:!0,transparent:!0,opacity:0.7,blending:b8}),Y=new L7(Q,X);q6.add(Y);let H=0;function U(O,q,R,V=10){let I=Q.attributes.position.array;for(let E=0;E<Math.min(V,200);E++){let N=(H+E)%200;I[N*3]=O+(Math.random()-0.5)*0.6,I[N*3+1]=q+(Math.random()-0.5)*0.6,I[N*3+2]=R+(Math.random()-0.5)*0.6,W[N*3]=(Math.random()-0.5)*2,W[N*3+1]=Math.random()*3+1,W[N*3+2]=(Math.random()-0.5)*2,Z[N]=1+Math.random()}H=(H+V)%200,Q.attributes.position.needsUpdate=!0}function G(O){let q=Q.attributes.position.array,R=!1;for(let V=0;V<200;V++)if(Z[V]>0){if(Z[V]-=O,q[V*3]+=W[V*3]*O,q[V*3+1]+=W[V*3+1]*O,q[V*3+2]+=W[V*3+2]*O,W[V*3+1]-=4*O,R=!0,Z[V]<=0)q[V*3+1]=-10}if(R)Q.attributes.position.needsUpdate=!0}return{emit:U,update:G}})();LX(H0);w7.initObjects(20,5);g0.refresh(H0);var vX=performance.now(),pK=0,OG=[{value:100,key:"milestone100"},{value:500,key:"milestone500"},{value:1000,key:"milestone1k"},{value:5000,key:"milestone5k"},{value:1e4,key:"milestone10k"},{value:50000,key:"milestone50k"},{value:1e5,key:"milestone100k"},{value:500000,key:"milestone500k"},{value:1e6,key:"milestone1m"}];function DG(J,Q){let $=J.milestonesHit||[];for(let K of OG)if(Q>=K.value&&!$.includes(K.value))return K;return null}function EG(J){if(J.coins>(J.peakCoins||0))J.peakCoins=Math.floor(J.coins);if(J.dollars>(J.peakDollars||0))J.peakDollars=Math.floor(J.dollars);if(J.dropCount>(J.peakCombo||0))J.peakCombo=J.dropCount}function fX(J){requestAnimationFrame(fX);let Q=Math.min((J-vX)/1000,0.05);if(vX=J,TX(H0,Q,($)=>{let K=$.currency==="dollars"?"dollar":"coin",W=Math.max(1,Math.floor($.coinsPerDrop||1));for(let Z=0;Z<W;Z++)setTimeout(()=>w7.dropObject($.pushForce,K),Z*50);g0.showDropResult($),g0.updateCombo($.comboCount)}),pK+=Q,pK>0.5){pK=0;let $=w7.collectFallen(),K=W9(H0),W=Math.floor($.win.coins*K.rewardMultiplier),Z=Math.floor($.win.dollars*K.dollarMultiplier),X=$.hole.coins,Y=$.hole.dollars;if(W>0||Z>0||$.win.cards.length>0){let H=0,U=Math.max(0,Math.min(1,K.luckChance||0));if(U>0&&$.win.coins>0){for(let P=0;P<$.win.coins;P++)if(Math.random()<U){let M=Math.random()<0.6?2:Math.random()<0.85?3:4;H+=M-1}}let G=0;if(U>0&&$.win.cards.length>0){for(let P=0;P<$.win.cards.length;P++)if(Math.random()<U)G+=5}let O=W+H+G,q=1,R=K.goldenTouch||0;if(R>0&&Math.random()<R&&O>0)q=2,g0.showNotification("\uD83E\uDD32 GOLDEN TOUCH! Double coins!","prestige"),g0.showZoneFeedback("×2 GOLDEN!","win",window.innerWidth/2,window.innerHeight/2+120);let V=O*q,I=Math.min(V,H0.maxCoins-H0.coins),E=V-Math.max(0,I);if(H0.coins+=Math.max(0,I),H0.totalEarned+=Math.max(0,I),H0.totalEarnedLifetime=(H0.totalEarnedLifetime||0)+Math.max(0,I),Z>0){let P=Math.min(Z,H0.maxDollars-H0.dollars);H0.dollars+=Math.max(0,P),H0.totalDollarsEarned=(H0.totalDollarsEarned||0)+Math.max(0,P)}if(H>1)g0.showNotification("\uD83C\uDF40 Lucky bonus +"+H+" !","prestige");if(E>0&&H0.coins>=H0.maxCoins)g0.showCoinsWasted(E);if(U6.emit(0,P8.height+0.3,P8.frontDropZ+0.3,(W+Z+$.win.cards.length)*5),I>0){if(g0.showNotification("\uD83C\uDF89 +"+I+" "+z0("coinsEarned"),"success"),Z9(I>=5?"bigwin":"win"),g0.showZoneFeedback("+"+I,"win",window.innerWidth/2+(Math.random()-0.5)*100,window.innerHeight/2+80),I>=10)g0.screenShake(2);else if(I>=3)g0.screenShake(1)}let N=K.jackpotChance||0.02;if(I>0&&Math.random()<N){let P=Math.random(),M=P<0.7?25:P<0.95?50:100;g0.showJackpot(M),g0.screenShake(2),Z9("jackpot"),g0.showCoinRain(35),U6.emit(0,P8.height+0.6,P8.frontDropZ+0.5,60),H0.coins=Math.min(H0.coins+M,H0.maxCoins),H0.totalEarned+=M,H0.totalEarnedLifetime=(H0.totalEarnedLifetime||H0.totalEarned)+M,H0.jackpotsHit=(H0.jackpotsHit||0)+1}let S=0;while(S++<4){let P=DG(H0,H0.totalEarnedLifetime||0);if(!P)break;H0.milestonesHit.push(P.value);let M=Math.floor(P.value*0.05);if(M>0)H0.coins=Math.min(H0.coins+M,H0.maxCoins),H0.totalEarned+=M,H0.totalEarnedLifetime=(H0.totalEarnedLifetime||H0.totalEarned)+M;g0.showMilestone(P,M),g0.showCoinRain(15),U6.emit(0,P8.height+0.5,P8.frontDropZ+0.4,25)}if($.win.cards.length>0){if(!H0.collectedCards)H0.collectedCards=[];$.win.cards.forEach((P)=>{if(!H0.collectedCards.includes(P)){H0.collectedCards.push(P),g0.showNotification("\uD83C\uDCCF "+z0("cardCollected")+H0.collectedCards.length,"prestige");let M=10;H0.coins=Math.min(H0.coins+M,H0.maxCoins),H0.totalEarned+=M,H0.totalEarnedLifetime=(H0.totalEarnedLifetime||H0.totalEarned)+M}})}}if(X>0||Y>0||$.hole.cards.length>0){if(U6.emit(0,P8.height+0.3,P8.frontDropZ+0.3,(X+Y+$.hole.cards.length)*3),X>1){if(g0.showNotification("\uD83D\uDC80 "+X+" "+z0("coinsLost"),"danger"),Z9("lose"),g0.showZoneFeedback("-"+X,"hole",window.innerWidth/2+(Math.random()-0.5)*100,window.innerHeight/2+80),X>=3)g0.screenShake(1)}if(Y>0)g0.showNotification("\uD83D\uDC80 "+Y+" $ "+z0("coinsLost"),"danger");if($.hole.cards.length>0)g0.showNotification("\uD83D\uDC94 "+$.hole.cards.length+" "+z0("cardsLost"),"danger")}if(X>0){if(H0.winStreak>0)H0.bestWinStreak=Math.max(H0.bestWinStreak||0,H0.winStreak);H0.winStreak=0,g0.updateStreak(0,H0.bestWinStreak||0,!0)}else if(W>0||Z>0){if(H0.winStreak=(H0.winStreak||0)+1,H0.winStreak>(H0.bestWinStreak||0))H0.bestWinStreak=H0.winStreak;g0.updateStreak(H0.winStreak,H0.bestWinStreak||0,!1)}EG(H0)}if(P8.updateMechanism(J/1000),w7.update(Q,J/1000),U6.update(Q),$G(J/1000),KG(J/1000),g0.updateHUD(),H0.coins<=0&&H0.dollars<=0&&H0.regenCooldown>0)g0.updateRegenTimer(H0.regenCooldown);else if(H0.isGameOver)g0.showFreeModal(Math.max(1,H0.regenCooldown));else g0.hideFreeModal();QG.update(),JG.render(q6,eN)}fX(performance.now());window.addEventListener("beforeunload",()=>D8(H0));console.log("\uD83C\uDCCF COIN PUSHER CASINO OCCULT loaded!");console.log("\uD83C\uDFAE SPACE=drop, 1-9,0=upgrades, TAB=prestige");
