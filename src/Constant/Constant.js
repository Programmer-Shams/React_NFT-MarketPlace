import { Frame1, Frame2, Frame3, Frame4, Frame5, Frame6, NFT1, NFT2, NFT3, NFT4, NFT5, ProfilePic } from "../assets/Images/Index"

export const navLinks = [
    {heref:"#home", label:'Home'},
    {heref:"#brows", label:'Brows'},
    {heref:"#create", label:'Create'},
    {heref:"#myNFTs", label:'MyNFT'},
]

export const futuredNFTs = [
    {
        imgURL:NFT1,
        name:'Iron Man',
        prof1:Frame1,
        prof2:Frame2,
        subText:'@CosmicArtisan@Sculptor',
        Price:'1.35'
    },
    {
        imgURL:NFT2,
        name:'Feline Brushstrokes',
        prof1:Frame3,
        prof2:Frame4,
        subText:'@Robotica@MysticInkr',
        Price:'1.86'
    },
    {
        imgURL:NFT3,
        name:'Illuminated Enigma',
        prof1:Frame5,
        prof2:Frame6,
        subText:'@EtherFlow@NanoNebula',
        Price:'2.05'
    },
    {
        imgURL:NFT4,
        name:'Pint-Sized Voyager',
        prof1:Frame3,
        subText:'@BinaryBard',
        Price:'1.87'
    },
    {
        imgURL:NFT5,
        name:'Charmingly Fluffed',
        prof1:Frame4,
        prof2:ProfilePic,
        subText:'@LunarArt@Robotica',
        Price:'2.32'
    }
]