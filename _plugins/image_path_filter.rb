module Jekyll
  module ImagePathFilter
    def fix_image_paths(content)
      return content if content.nil?
      
      # 현재 페이지의 slug (파일명에서 날짜 제외)
      page_slug = @context.registers[:page]['slug']
      page_date = @context.registers[:page]['date']
      
      if page_slug && page_date
        # YYYY-MM-DD-slug 형식으로 폴더명 생성
        folder_name = "#{page_date.strftime('%Y-%m-%d')}-#{page_slug}"
        
        # ./폴더명/이미지 또는 ./attachment-xxx.png 패턴을 _posts/폴더명/이미지로 변환
        content = content.gsub(/\.\/#{Regexp.escape(folder_name)}\/([^\s\)]+)/, "/_posts/#{folder_name}/\\1")
        
        # ./attachment-xxx.png 같은 상대경로를 절대경로로 변환
        content = content.gsub(/\.\/(attachment-[^\s\)]+)/, "/_posts/#{folder_name}/\\1")
      end
      
      content
    end
  end
  
  # Post 클래스에 Hook 추가하여 front matter image도 변환
  class PostImagePathFixer
    Jekyll::Hooks.register :posts, :pre_render do |post|
      if post.data['image'] && post.data['image'].start_with?('./')
        folder_name = "#{post.date.strftime('%Y-%m-%d')}-#{post.data['slug']}"
        
        # ./폴더명/이미지 패턴
        if post.data['image'] =~ /\.\/#{Regexp.escape(folder_name)}\//
          post.data['image'] = post.data['image'].gsub(/\.\/#{Regexp.escape(folder_name)}\//, "/_posts/#{folder_name}/")
        # ./attachment-xxx.png 패턴
        elsif post.data['image'] =~ /\.\/(attachment-[^\s]+)/
          post.data['image'] = "/_posts/#{folder_name}/#{$1}"
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ImagePathFilter)
