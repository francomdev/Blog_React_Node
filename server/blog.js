const blogs = [
  {
    id: '1',
    title: 'First Blog',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere est id vehicula lobortis. Nulla quis lectus sapien. Ut lobortis ex massa, vitae vulputate metus dapibus ac. Cras pharetra libero a eros dapibus, sed pellentesque mauris pharetra. Aenean in efficitur odio. Nulla scelerisque hendrerit pharetra. Curabitur dignissim hendrerit porttitor. Donec laoreet ex at ex fermentum, at dapibus elit pulvinar. Etiam porta scelerisque odio eu blandit. Integer quam augue, maximus quis nisi vel, lacinia pretium lacus. Morbi sodales, ex sit amet iaculis imperdiet, nisi odio porttitor ligula, facilisis pretium urna orci vel dui. Aenean quis condimentum ante. Cras lobortis mauris vel nulla varius, vel vehicula nibh ultricies. Donec aliquam tortor et nulla porta, eu ultricies lacus feugiat. Ut leo risus, tempor sed tellus sit amet, ullamcorper auctor quam. Maecenas mattis rhoncus lacus in imperdiet.
    
    Sed euismod ex non lectus malesuada, sit amet dictum sem molestie. Pellentesque at urna at felis ullamcorper malesuada. Cras gravida porta enim in commodo. Suspendisse vulputate dolor id consequat lacinia. Sed dolor velit, mattis in mauris sit amet, lobortis hendrerit felis. Integer auctor ultricies ultricies. Nulla egestas vestibulum nulla nec tincidunt.
    
    Aliquam dignissim consectetur magna a finibus. Duis a enim ultricies, malesuada enim sit amet, eleifend leo. Phasellus sagittis, ex sed auctor maximus, ligula nisi facilisis magna, eget bibendum sapien eros et mauris. Etiam vitae odio at magna elementum tempus. Nulla faucibus sapien libero. Mauris molestie magna consectetur turpis tincidunt, quis euismod risus sagittis. Aenean tristique justo nunc, vitae pellentesque tellus laoreet et.`,
    author: 'Franco Mayo',
    date: new Date().toLocaleDateString()
  },
  {
    id: '2',
    title: 'Another Blog',
    content: `Fusce in lacus ut neque accumsan tincidunt. Duis eu lectus lectus. Etiam sit amet consequat odio. In vehicula massa ultrices velit tempus, et sollicitudin augue molestie. Nam nec dolor eu justo feugiat malesuada id non quam. Praesent ultrices tortor vehicula elit consectetur lacinia. In hac habitasse platea dictumst. Fusce porta tempor urna, at placerat libero ornare lacinia. Donec sit amet rhoncus nisl, ut posuere massa. Suspendisse ut est sed lectus cursus facilisis.

    Praesent fermentum mauris finibus, feugiat orci sed, ornare enim. Mauris ullamcorper sem purus, rutrum consectetur ex faucibus eu. Nulla bibendum placerat arcu ut aliquam. Aliquam vel blandit elit. Aenean vel leo metus. Nunc scelerisque dui vel velit pretium porta. Nullam sed faucibus diam. Morbi ultricies, odio vitae tincidunt vulputate, risus erat congue ex, vel volutpat massa tellus id turpis. Aliquam vel purus fringilla, fermentum nibh nec, luctus est. Pellentesque et suscipit lacus. Vestibulum finibus sapien luctus quam pretium, nec rhoncus nisl convallis. Nam laoreet vehicula ipsum, in placerat erat porttitor ac. Praesent accumsan lacus augue, a mollis eros fringilla ut. Quisque gravida ipsum ut sapien iaculis gravida.
    
    Sed a nisi ut metus ullamcorper pharetra. Praesent tincidunt porta nunc, non imperdiet velit ullamcorper in. Aliquam sed aliquet erat. Cras ac ipsum nunc. Nulla aliquet pretium ornare. In hac habitasse platea dictumst. In tincidunt convallis eros, ac consectetur turpis pharetra feugiat.
    Quisque molestie elit vel mollis lacinia. Proin luctus nunc quis congue efficitur. Duis tempor erat a turpis fringilla, sed pretium justo sodales. Proin vestibulum dolor arcu, eget auctor justo pretium quis. Nullam congue turpis in augue dignissim varius. Curabitur quis rutrum enim, ut blandit justo. Praesent a tempor turpis. Proin sollicitudin sapien eget ex vehicula lacinia.`,
    author: 'Juan Carlos',
    date: new Date().toLocaleDateString()
  },
  {
    id: '3',
    title: 'Third Blog',
    content: `Nam sed accumsan enim, at blandit quam. Phasellus sagittis dolor non massa sollicitudin hendrerit. Suspendisse sed nisi tempor, tristique nulla id, suscipit mi. Maecenas vel scelerisque ante, sit amet commodo purus. Nunc elementum placerat nunc in gravida. Nam ac hendrerit sem. Donec a mauris lorem. Nunc eget elementum nunc. Maecenas eget ipsum vitae erat molestie pellentesque. Phasellus et dictum arcu.

    Praesent rhoncus tincidunt lobortis. Quisque sapien odio, sagittis vel sagittis condimentum, ultricies ut orci. In facilisis, dolor at sodales hendrerit, est justo bibendum augue, at sollicitudin mauris nisl ut turpis. Mauris venenatis condimentum erat nec bibendum. Curabitur consectetur tincidunt nisi, ac placerat velit ornare eu. Nunc nunc ex, sollicitudin a risus in, tincidunt lacinia metus. Phasellus facilisis lectus turpis, in cursus dolor convallis vitae. Aenean at faucibus erat. Etiam sed elit vitae turpis tempus varius at eu diam. Sed condimentum lorem ac ex vehicula consectetur.
    
    Etiam hendrerit leo in accumsan finibus. Ut auctor justo vel eros rutrum, ac feugiat dui fringilla. Duis non finibus orci, feugiat aliquet lacus. Aliquam fermentum aliquam tempor. Vestibulum egestas massa quis tempor cursus. Aliquam erat volutpat. Vivamus porttitor dolor nec velit luctus sollicitudin. In pretium elit vitae lorem consequat, non sodales libero dignissim. Quisque ornare odio id libero congue volutpat. Phasellus semper velit nunc, sit amet cursus sapien laoreet quis. Suspendisse potenti. Mauris eu faucibus urna, in blandit orci. Curabitur et lacus non neque finibus hendrerit. Integer semper, tortor ac lacinia maximus, lorem justo maximus neque, at imperdiet libero libero eu eros.
    
    Aliquam dapibus turpis quis leo iaculis sollicitudin. Donec massa leo, mollis in tortor pharetra, vestibulum dictum eros. Nullam ullamcorper ante vehicula, tempor libero sit amet, vestibulum metus. Aliquam posuere lorem non purus sagittis, ac congue mi tristique. Quisque auctor sodales tristique. Aliquam augue diam, tincidunt et laoreet in, ultricies bibendum justo. Morbi laoreet eget lorem in porttitor. Curabitur dapibus felis eu felis laoreet, a egestas mauris laoreet. In porta vitae purus non ullamcorper. Mauris in mattis est. Pellentesque rutrum orci metus, ac sodales est dignissim et. Proin ut nisi massa.
    
    Nulla dictum ex dolor, sit amet pretium neque fringilla in. Curabitur a auctor nibh. Mauris quis leo sit amet ante fringilla tristique. Phasellus accumsan augue id suscipit volutpat. Morbi quis magna dignissim, aliquam ex in, cursus mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vel gravida felis. Aenean nec justo nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent convallis auctor ex, non accumsan est consequat et. Phasellus eu ex porttitor orci sagittis suscipit. Nam dictum nunc vel erat scelerisque pellentesque.`,
    author: 'Pepe',
    date: new Date().toLocaleDateString()
  }
]

export default blogs
