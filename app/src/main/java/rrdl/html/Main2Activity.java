package rrdl.html;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class Main2Activity extends AppCompatActivity {
    WebView mWebView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
       /* WebSettings webSettings=mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);*/
        mWebView=findViewById(R.id.webview);
        mWebView.setWebViewClient(new WebViewClient()
                                  {
                                      @Override
                                      public boolean shouldOverrideUrlLoading(WebView view, String url) {
                                           view.loadUrl(url.toString());

                                          return super.shouldOverrideUrlLoading(view, url);
                                      }
                                  }
        );
        mWebView.loadUrl("file:///android_asset/android - Unable to merge dex - Stack Overflow.html");
    }
}
